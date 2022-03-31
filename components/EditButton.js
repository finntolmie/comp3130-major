import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";

export default function EditButton() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.edit}>Edit</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    backgroundColor: "rgba(195, 185, 255, 0.4)",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  edit: {
    color: "white",
  },
});
