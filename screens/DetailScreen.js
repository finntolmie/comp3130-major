import {
  Alert,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import LogoutButton from "../components/LogoutButton";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import DeleteButton from "../components/DeleteButton";
import AddButton from "../components/AddButton";
import Dialog from "react-native-dialog";

export default function DetailScreen({ route, navigation }) {
  const { collectionIndex } = route.params;
  const collection = user.collections[collectionIndex];
  const name = collection.name;
  const [deleted, setDeleted] = useState([]);
  const [deleteState, setDeleteState] = useState(false);
  const [addState, setAddState] = useState(false);
  const [newPhoto, setNewPhoto] = useState({
    title: "",
    desc: "",
    img: "",
  });

  const handleTitle = (event) => {
    setNewPhoto({ ...newPhoto, title: event });
  };

  const handleImg = (event) => {
    setNewPhoto({ ...newPhoto, img: event });
  };

  const handleDesc = (event) => {
    setNewPhoto({ ...newPhoto, desc: event });
  };

  const handleDeleteToggle = () => {
    setDeleteState(!deleteState);
  };

  const handleAddPress = () => {
    setAddState(true);
    setDeleteState(false);
  };

  const handleAdd = () => {
    collection.photos.push({
      title: newPhoto.title,
      desc: newPhoto.desc,
      img: newPhoto.img,
    });
    setNewPhoto("");
    setAddState(false);
  };

  const handlePress = (index) => {
    if (deleteState) {
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
              photos.splice(index, 1);
              setDeleted((curr) => [...curr, collection.photos[index]]);
            },
          },
        ]
      );
    } else {
      navigation.navigate("MemoryScreen", {
        collectionIndex,
        photoIndex: index,
        navigation,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/images/background.jpg")}
        resizeMode="cover"
      >
        <View>
          <Dialog.Container visible={addState}>
            <Dialog.Title>New Collection</Dialog.Title>
            <Dialog.Input
              label="Title"
              placeholder="Optional"
              onChangeText={(event) => handleTitle(event)}
            />
            <Dialog.Input
              label="Description"
              placeholder="Optional"
              onChangeText={(event) => handleDesc(event)}
            />
            <Dialog.Input
              label="Image URL"
              placeholder="Required"
              onChangeText={(event) => handleImg(event)}
            />
            <Dialog.Button label="Cancel" onPress={() => setAddState(false)} />
            <Dialog.Button label="Create" onPress={handleAdd} />
          </Dialog.Container>
        </View>
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
            <TouchableOpacity onPress={handleDeleteToggle}>
              <DeleteButton />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAddPress}>
              <AddButton />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <View style={styles.collectionWrapper}>
              {collection.photos.map((photo, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => handlePress(i)}
                  style={
                    deleteState
                      ? { backgroundColor: "rgba(196, 0, 0, 0.2)" }
                      : { backgroundColor: "transparent" }
                  }
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
