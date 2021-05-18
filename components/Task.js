import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ReactDOM from "react-dom";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 25,
    borderRadius: 10,
    marginBottom: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#a52a2a",
    opacity: 0.6,
    borderRadius: 5,
    marginRight: 15,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#7fff00",
    borderRadius: 5,
    borderWidth: 2,
  },
});

export default Task;
