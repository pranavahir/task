import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default function firstFile(props) {
  return <View style={styles.Container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});