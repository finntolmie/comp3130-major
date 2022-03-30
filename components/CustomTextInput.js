import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

export default function CustomTextInput({ style, ...otherProps }) {
  return (
    <View>
      <TextInput
        scrollEnabled={false}
        style={[styles.container, style]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    color: "#000",
    borderColor: "#000",
    height: 70,
    width: 215,
    borderRadius: 5,
    padding: 5,
    marginTop: 10,
  },
});
