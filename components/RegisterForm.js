import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomTextInput from "./CustomTextInput";
import * as Yup from "yup"; //import Yup
import users from "../data/users";

const schema = Yup.object().shape(
  //define schema
  {
    username: Yup.string().required().min(1).max(16),
    password: Yup.string().required().min(1).max(16),
  }
);

export default function RegisterForm({ navigation }) {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        const username = values.username;
        const id = users.length + 1;
        values = { ...values, id, collections: [] };
        if (users.filter((user) => user.username === username).length > 0) {
          alert("That username already exists.");
        } else {
          users.push(values);
          const newUser = users.filter((user) => user.id === id)[0];
          navigation.navigate("AccountScreen", { user: newUser });
        }
      }}
      validationSchema={schema}
    >
      {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
        <>
          <View style={styles.container}>
            <View style={styles.form}>
              <View style={styles.inputs}>
                <CustomTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Username"
                  onBlur={() => setFieldTouched("username")}
                  onChangeText={handleChange("username")}
                />
                {touched.username && (
                  <Text style={{ color: "white", fontSize: 10 }}>
                    {errors.username}
                  </Text>
                )}
                <CustomTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Password"
                  secureTextEntry
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                  style={{ marginBottom: 20 }}
                />
                {touched.password && (
                  <Text style={{ color: "white", fontSize: 10 }}>
                    {errors.password}
                  </Text>
                )}
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.register}>Register</Text>
                </TouchableOpacity>
              </View>
            </View>
            <StatusBar style="auto" />
          </View>
        </>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  form: {
    flex: 0.8,
    width: "100%",
    height: "80%",
    backgroundColor: "#00CEDB",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  formHeading: {
    color: "darkblue",
    fontSize: 32,
    fontWeight: "500",
  },
  inputs: {
    flex: 1,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    backgroundColor: "rgba(0, 10, 255, 0.33)",
    height: 70,
    width: 215,
    borderRadius: 30,
  },
  register: {
    textAlign: "center",
    fontSize: 32,
  },
});
