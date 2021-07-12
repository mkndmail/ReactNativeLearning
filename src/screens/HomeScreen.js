import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Redirect to other Screens</Text>
      <Button
        style={styles.buttonStyle}
        title="Go to Components Demo"
        onPress={() => navigateToScreen("Components")}
      />
      <View style={{ height: 10 }}></View>
      <Button
        style={styles.buttonStyle}
        title="Go to List Demo"
        onPress={() => navigateToScreen("MyList")}
      />
      <View style={{ height: 10 }}></View>
      <Button
        style={styles.buttonStyle}
        title="Go to Image Screen"
        onPress={() => navigateToScreen("ImageList")}
      />
      <View style={{ height: 10 }}></View>
      <Button
        title="Go to Counter Screen"
        style={styles.buttonStyle}
        onPress={() => navigateToScreen("Counter")}
      />
      <View style={{ height: 10 }}></View>
      <Button
        title="Go to Color Screen"
        style={styles.buttonStyle}
        onPress={() => navigateToScreen("Color")}
      />
      <View style={{ height: 10 }}></View>
      <Button
        title="Go to Square Screen"
        style={styles.buttonStyle}
        onPress={() => navigateToScreen("Square")}
      />
      <View style={{ height: 10 }}></View>
      <Button
        title="Go to Text Screen"
        style={styles.buttonStyle}
        onPress={() => navigateToScreen("Text")}
      />
      <View style={{ height: 10 }}></View>
      <Button
        title="Go to Box Demo Screen"
        style={styles.buttonStyle}
        onPress={() => navigateToScreen("Box")}
      />
    </View>
  );
  function navigateToScreen(routeName) {
    return navigation.navigate(routeName);
  }
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: "center",
  },
  buttonStyle: {
    marginTop: 10,
  },
  container: {
    margin: 10,
  },
});

export default HomeScreen;
