import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LogoutButton from "./components/LogoutButton";
import AccountScreen from "./screens/AccountScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <AccountScreen />
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
