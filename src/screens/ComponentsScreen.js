import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const myName = 'Mukund Gururani';
  return (
    <View style={{margin:10}}>
      <Text style={style.textStyle}>Getting started with react native</Text>
      <Text style={{fontSize:20}}>My name is {myName}</Text>
    </View>
  );
};
const demo = () => {
  <Text></Text>;
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
});

export default ComponentsScreen;
