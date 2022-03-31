import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function BackButton({ navigation, color, clickable }) {
  return (
    <TouchableOpacity
      onPress={() => {
        if (clickable != null) {
          clickable ? navigation.goBack() : null;
        } else {
          navigation.goBack();
        }
      }}
    >
      <MaterialIcons name="arrow-back-ios" size={40} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
