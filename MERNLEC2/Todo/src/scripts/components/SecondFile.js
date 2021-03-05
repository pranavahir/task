import React, {Component}  from 'react';
import {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';


import Header from '../../reusable components/Header';
import axios from 'axios';
import {Actions} from 'react-native-router-flux';

export default class SecondFile extends Component {
  
  

  constructor(props) {
    super(props);
   
    this.todoItem = [];

    this.state = {
      todos: [],
      show: false,
      loader: false,
    };
  }
  

  onPressHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  componentDidMount() {
    this.setState({
      loader: true,
    });
    axios
      .get('http://192.168.1.19:7000/')
      .then((response) => {
        console.log(response.data);
        this.setState({
          todos: response.data,
          loader: false,
          
        });
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  onEdit = (id) => {
    Actions.Edit({id});
    
  };
  onDelete = (id) => {
    Actions.Delete({id});
  }

  _renderItem = ({item}) => (
    
    <View style={styles.todoBox}>
       <Text style={styles.todoBoxText}>Id:{item._id}</Text>
      <Text style={styles.todoBoxText}>Title:{item.title}</Text>
      <Text style={styles.todoBoxText}>Description:{item.description}</Text>
      <TouchableOpacity onPress={this.onEdit.bind(this, item.id)}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.onDelete.bind(this, item.id)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const {name, show, todos, loader} = this.state;
    console.log(todos);
  
  
  
    return (
      <View style={styles.Container}>
        {todos !== null ? (
          <>
            <Header title="Todo List" />
            {loader ? (
              <View>
                <ActivityIndicator size="large" color="black" />
              </View>
            ) : (
              <FlatList 
              data={todos} 
              renderItem={this._renderItem}
                />
            )}
          </>
        ) : ( 
          <Text>No Todo's to show</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
  },
  btn: {
    borderWidth: 1,
    borderColor: 'yellow',
    padding: 10,
    width: 100,
    height: 50,
    marginLeft: 30,
    borderRadius: 60,
    backgroundColor: 'red',
  },
  todoBox: {
    width: 400,
    height: 200,
    borderWidth: 0.6,
    borderColor: 'blue',
    padding: 10,
    marginTop: 15,
  },
  todoBoxText: {
    fontSize: 18,
    justifyContent:'center',
    alignItems:'center',
    color:'green'
  },
  Completed: {
    color: 'green',
    fontSize: 16,
    textAlign: 'center',
  },
  inComplete: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  textContainer: {
    marginTop: 20,
  },
});