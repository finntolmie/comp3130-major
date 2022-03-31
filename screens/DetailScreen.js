import {
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import LogoutButton from "../components/LogoutButton";
import React from "react";
import BackButton from "../components/BackButton";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

export default function DetailScreen({ route, navigation }) {
  const { name, photos } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
      >
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <View style={styles.back}>
              <BackButton navigation={navigation} />
            </View>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{name}</Text>
            </View>
            <View style={styles.icon}>
              <LogoutButton navigation={navigation} />
            </View>
          </View>
          <View style={styles.actions}>
            <DeleteButton style={styles.action} />
            <EditButton style={styles.action} />
          </View>
          <ScrollView>
            <View style={styles.collectionWrapper}>
              {photos.map((photo) => (
                <TouchableOpacity
                  key={photo.id}
                  onPress={() => {
                    navigation.navigate("MemoryScreen", { photo });
                  }}
                >
                  <Image source={{ uri: photo.img }} style={styles.img} />
                </TouchableOpacity>
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
  back: {
    padding: 20,
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
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  img: {
    margin: 20,
    width: 150,
    height: 150,
  },
});
