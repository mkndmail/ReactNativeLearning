import React, { useState } from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View style={colorStyle.containeStyle}>
      <Button
        title="Add Colors"
        onPress={() => {
          setColors([...colors, randomColor()]);
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <BoxItem color={item} />}
      />
    </View>
  );
};
const BoxItem = ({ color }) => {
  console.log(color);
  return (
    <View
      style={{
        height: 100,
        width: 100,
        backgroundColor: color ,
      }}
    />
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

const colorStyle = StyleSheet.create({
  containeStyle: {
    margin: 10,
  },
});

export default ColorScreen;
