import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";

export default function AddButton() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.add}>Add</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    backgroundColor: "rgba(0, 185, 0, 0.4)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: "white",
  },
});
