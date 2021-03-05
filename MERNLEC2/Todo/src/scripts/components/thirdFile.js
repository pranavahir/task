import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default class thirdFile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      show: false,
    };
  }

  onPressHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const {password, show} = this.state;
    return (
     <ScrollView>
          <View>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(value) => this.setState({password: value})}
        />
        <TouchableOpacity style={styles.btn} onPress={this.onPressHandler.bind(this)}>
          <Text>Login</Text>
        </TouchableOpacity>
        {show ? <Text>{password}</Text> : null}
      </View>
      <TouchableOpacity style={styles.btn} onPress={this.onPressHandler.bind(this)}>
          <Text>SignUp</Text>
        </TouchableOpacity>
        {show ? <Text>{SignUp}</Text> : null}
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    color: 'white',
    
  },
  btn:{
      flex:1,
      borderWidth:2,
      borderColor:'red',
      padding:15,
      width:100,
      height:50,
      marginLeft:120,
      borderRadius:80,
    backgroundColor:'orange'
    }
});
