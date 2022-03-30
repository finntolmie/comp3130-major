import {
  Dimensions,
  StyleSheet,
  ImageBackground,
  Text,
  View,
} from "react-native";
import React from "react";
import LogoutButton from "../components/LogoutButton";
import Collection from "../components/Collection";
// import { Collections } from "../collections";

const User = "John";
const collections = [
  {
    name: "Hawaii collection",
    amountStored: 162,
  },
  {
    name: "Home collection",
    amountStored: 73,
  },
  {
    name: "Troys collection",
    amountStored: 413241,
  },
];

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
      >
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Welcome back, {User}!</Text>
            </View>
            <View style={styles.icon}>
              <LogoutButton />
            </View>
          </View>
          <View style={styles.collections}>
            {collections.map((collection) => (
              <Collection
                key={collection.name}
                name={collection.name}
                amount={collection.amountStored}
              />
            ))}
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
  },
  wrapper: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    padding: 20,
  },
  titleText: {
    fontSize: 24,
  },
  icon: {
    padding: 20,
  },
  collectionWrapper: {
    height: 120,
    width: "80%",
    marginTop: 20,
    backgroundColor: "rgba(196, 196, 196, 0.2)",
    alignSelf: "center",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  left: {
    justifyContent: "space-between",
  },
  right: {
    justifyContent: "center",
    marginRight: 20,
  },
  collectionTitle: {
    padding: 15,
    fontSize: 24,
  },
  collectionDetail: {
    padding: 15,
    fontSize: 24,
    fontStyle: "italic",
  },
});
