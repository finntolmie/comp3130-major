import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function LogoutButton({ navigation }) {
  const handlePress = () => {
    return Alert.alert("Confirm Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.navigate("WelcomeScreen") },
    ]);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
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
