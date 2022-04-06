import {
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import DeleteButton from "../components/DeleteButton";
import EditButton from "../components/EditButton";

export default function MemoryScreen({ navigation, route }) {
  const { collectionIndex, photoIndex } = route.params;
  const photo = user.collections[collectionIndex].photos[photoIndex];
  const [tapped, setTapped] = useState(true);
  const [clickable, setClickable] = useState(false);

  const handlePress = () => {
    setTapped(!tapped);
    setClickable(!clickable);
  };

  const handleDelete = () => {
    Alert.alert(
      "Confirm delete",
      "Are you sure you want to delete this memory?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            user.collections[collectionIndex].photos.splice(photoIndex, 1);
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { opacity: tapped ? 0 : 1 }]}>
        <View style={styles.back}>
          <BackButton
            color="white"
            navigation={navigation}
            clickable={clickable}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{photo.title}</Text>
        </View>
        <View style={styles.icon}>
          <EditButton />
        </View>
      </View>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.imgContainer}>
          <Image
            source={{
              uri: photo.img,
            }}
            resizeMode="contain"
            style={styles.img}
          />
        </View>
      </TouchableWithoutFeedback>
      <View style={[styles.bottom, { opacity: tapped ? 0 : 1 }]}>
        <Text style={styles.desc}>{photo.desc}</Text>
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={handleDelete}>
            <DeleteButton />
          </TouchableOpacity>
          <Text style={styles.date}>{photo.date}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
  },
  header: {
    height: 100,
    backgroundColor: "rgba(50, 50, 50, 0.2)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  back: {
    padding: 20,
  },
  titleContainer: {
    padding: 20,
  },
  titleText: {
    textAlign: "center",
    color: "white",
    fontSize: 24,
  },
  actions: {
    padding: 20,
  },
  edit: {
    color: "white",
  },
  imgContainer: {
    flex: 1,
    width: "100%",
  },
  img: {
    flex: 1,
  },
  bottom: {
    flex: 0.5,
    alignContent: "center",
    justifyContent: "center",
  },
  desc: {
    flex: 3,
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
  bottomBar: {
    padding: 20,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  date: {
    color: "white",
  },
});
