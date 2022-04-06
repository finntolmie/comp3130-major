import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  View,
} from "react-native";
import React from "react";
import LogoutButton from "../components/LogoutButton";
import Collection from "../components/Collection";
import { collections } from "../collections";
import DeleteButton from "../components/DeleteButton";
import AddButton from "../components/AddButton";

const User = "John";

export default function AccountScreen({ route, navigation }) {
  const { username } = route.params;
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
              <Text style={styles.titleText}>Welcome back, {username}!</Text>
            </View>
            <View style={styles.icon}>
              <LogoutButton navigation={navigation} />
            </View>
          </View>
          <View style={styles.actions}>
            <DeleteButton />
            <AddButton />
          </View>
          <ScrollView>
            <View style={styles.collections}>
              {collections.map((collection) => (
                <Collection
                  key={collection.id}
                  collection={collection}
                  navigation={navigation}
                />
              ))}
            </View>
          </ScrollView>
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
  actions: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
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
