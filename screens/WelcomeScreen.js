import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  const handleSubmit = (event) => {
    console.log(event.target.value);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>Welcome to Memories!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <StatusBar style="auto"></StatusBar>
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
  buttonContainer: {
    flex: 6,
    width: "80%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00CEDB",
    width: "100%",
    height: 100,
    borderRadius: 20,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 32,
  },
});
