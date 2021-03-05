import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default function Header(props) {
  const onAddPress = () => {
    Actions.Add();
  };
  return (
    <View style={styles.HeaderContainer}>
      <View style={{marginLeft:30}} />
      <Text style={styles.HeaderText}>{props._id}</Text>
      <Text style={styles.HeaderText}>{props.title}</Text>
      <Text style={styles.HeaderText}>{props.description}</Text>
      <Text style={styles.HeaderText}>{props.Edit}</Text>
      <TouchableOpacity style={styles.btn} onPress={onAddPress}>
        <Text style={styles.HeaderText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    width: 450,
    height: 80,
    backgroundColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row'
  },
  HeaderText: {
    color: 'white',
    fontSize: 18,
  },
  btn:{
    marginRight:30
  }
});