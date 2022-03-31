import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigation/Navigator";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
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
