import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  return (
    <View style={styleSheet.container}>
      <Text>Enter your name</Text>
      <TextInput
        style={styleSheet.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setName}
        value={name}
      />
      <Text>Enter password:</Text>
      <TextInput
        style={styleSheet.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(newValue) =>
          newValue.length < 5 ? setPasswordError(true) : setPasswordError(false)
        }
      />
      {passwordError ? (
        <Text style={styleSheet.errorText}>
          PassWord must be longer than 5 characters
        </Text>
      ) : null}
      <Text>Your name is {name}</Text>
    </View>
  );
};

const styleSheet = StyleSheet.create({
  conatiner: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    height: 30,
    margin: 15,
    borderColor: "black",
  },
  errorText: {
    color: "red",
  },
});
export default TextScreen;
