import { StyleSheet, ImageBackground, Text, View } from "react-native";
import RegisterForm from "../components/RegisterForm";
import React from "react";

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>Sign up with Memories!</Text>
          <View style={styles.formContainer}>
            <RegisterForm />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentWrapper: {
    backgroundColor: "rgba(195, 185, 255, 0.4)",
    width: "80%",
    height: "80%",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
  },
  title: {
    flex: 1,
    color: "black",
    fontSize: 32,
    fontWeight: "600",
    marginTop: 60,
    marginHorizontal: 30,
    textAlign: "center",
  },
  formContainer: {
    flex: 6,
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
