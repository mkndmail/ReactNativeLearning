import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";
const ImageDetail = ( props ) => {
  return (
    <View style={{margin:20}}>
      <Image source={props.imageSource} />
      <Text style={{fontSize:25}}>{props.title}</Text>
      <Text style={{fontSize:25}}>Image Score - {props.imageScore}</Text>
    </View>
  );
};

const imageStyleSheet = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ImageDetail;
