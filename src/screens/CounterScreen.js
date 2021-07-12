import React, { useReducer } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return state.count == 0
        ? state
        : { ...state, count: state.count - action.payload };
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View style={counterStyle.containerStyle}>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increment", payload: 1 });
        }}
      />
      <View style={{ height: 10 }}></View>
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: 1 });
        }}
      />
      <Text style={counterStyle.counterStyle}>
        Current Count: {state.count}
      </Text>
    </View>
  );
};

const counterStyle = StyleSheet.create({
  buttonStyle: {},
  counterStyle: {
    fontSize: 18,
  },
  containerStyle: { margin: 10 },
});
export default CounterScreen;
