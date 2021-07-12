import React from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import { CardStyleInterpolators } from "react-navigation-stack";
const Item = ({ title }) => {
  return (
    <View style={myStyleSheet.item}>
      <Text style={myStyleSheet.title}>{title}</Text>
    </View>
  );
};

const companies = [
  { title: "Apple" },
  { title: "Facebook" },
  { title: "Google" },
  { title: "Microsoft" },
  { title: "Amazon" },
  { title: "Twitter" },
  { title: "Oracle" },
  { title: "Sun Micro System" },
];
const ListScreen = () => {
  return (
    <FlatList
      data={companies}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.title}
    />
  );
};

const myStyleSheet = StyleSheet.create({
  textStyle: {},
  title: {
    fontSize: 20,
    height: 30,
    marginVertical: 10,
  },
  item: {
    padding: 10,
  },
});
export default ListScreen;
