import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function LogoutButton() {
  return (
    <View>
      <TouchableOpacity>
        <MaterialIcons name="logout" size={40} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 50,
    height: 50,
  },
});
