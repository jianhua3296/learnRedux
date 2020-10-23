import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addition, subtraction } from "./store/actions";

const Counter = (props) => {
  const data = useSelector((state) => state);
  const {counter, name} = data;
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          dispatch(addition())
        }}
        title="add"
      ></Button>
      <Text> {counter}</Text>
      <Text> {name}</Text>

      <Button
        onPress={() => {
          dispatch(subtraction())
        }}
        title="sub"
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Counter;
