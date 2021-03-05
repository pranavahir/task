import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default function Welcome() {
  const onBtnClick = () => {
    Actions.Home();
  };

  return (
    <View style={styles.WelcomeContainer}>
      <Text style={styles.headerText}>Welcome to todo List</Text>
      <TouchableOpacity onPress={onBtnClick} style={styles.btn}>
        <Text style={styles.btnText}>Get inside</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  WelcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    marginBottom: 10,
  },
  btn: {
    width: 150,
    height: 50,
    borderRadius: 45,
    borderColor: 'blue',
    backgroundColor: '#000080',
    alignItems: 'center',
    padding: 10,
  },
  btnText: {
    fontSize: 16,
    color: 'white',
  },
});