import React from "react";
import { View, StyleSheet, Text } from "react-native";

const BoxScreen = () => {
  return (
    <View style={style.parentStyle}>
      <View style={style.viewStyleOne} />
      <View style={style.viewStyleTwo} />
      <View style={style.viewStyleThree} />
    </View>
  );
};

const style = StyleSheet.create({
  parentStyle: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
  },
  viewStyleOne: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  viewStyleTwo: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    alignSelf: "flex-end",
  },
  viewStyleThree: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
    justifyContent: "flex-end",
  },
});
export default BoxScreen;
