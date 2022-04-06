import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";

export default function DeleteButton() {
  return (
    <View style={styles.container}>
      <Text style={styles.delete}>Delete</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    backgroundColor: "rgba(240, 0, 0, 0.4)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  delete: {
    color: "white",
  },
});
