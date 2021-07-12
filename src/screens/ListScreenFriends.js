import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const friends = [
  { name: "Mukund 1", age: "20" },
  { name: "Mukund 2", age: "45" },
  { name: "Mukund 3", age: "45" },
  { name: "Mukund 4", age: "45" },
  { name: "Mukund 5", age: "45" },
  { name: "Mukund 6", age: "45" },
  { name: "Mukund 7", age: "45" },
  { name: "Mukund 8", age: "45" },
  { name: "Mukund 9", age: "45" },
  { name: "Mukund 10", age: "45" },
];
const ListScreenFriend = () => {
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => <NameItem item={item} />}
      keyExtractor={(item) => item.name}
    />
  );
};
const myStyle = StyleSheet.create({
  itemStyle: {
    fontSize: 20,
    padding: 5,
  },
});
const NameItem = ({ item }) => {
  return (
    <Text style={myStyle.itemStyle}>
      {item.name} - Age {item.age}
    </Text>
  );
};

export default ListScreenFriend;
