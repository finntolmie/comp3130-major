import {
  Alert,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  NativeModules,
  View,
} from "react-native";
import Dialog from "react-native-dialog";
import React, { useEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";
import Collection from "../components/Collection";
import DeleteButton from "../components/DeleteButton";
import AddButton from "../components/AddButton";
import { useIsFocused } from "@react-navigation/native";

export default function AccountScreen({ route, navigation }) {
  const [deleted, setDeleted] = useState([]);
  const [deleteState, setDeleteState] = useState(false);
  const [addState, setAddState] = useState(false);
  const [newCollection, setNewCollection] = useState("");
  const [renderKey, setRenderKey] = useState(0);
  const { user } = route.params;
  const collections = user.collections;

  //global user variable for all children of AccountScreen
  global.user = user;

  //This is used to rerender the screen when loaded
  const isFocused = useIsFocused();
  useEffect(() => {
    setRenderKey(Math.random());
  }, [isFocused]);

  const handleDeleteToggle = () => {
    setDeleteState(!deleteState);
  };

  const handleChange = (event) => {
    setNewCollection(event);
  };

  //pushes to array and resets states
  const handleAdd = () => {
    collections.push({ name: newCollection, photos: [] });
    setNewCollection("");
    setAddState(false);
  };

  //makes sure the two states arent active at the same time
  const handleAddPress = () => {
    setAddState(true);
    setDeleteState(false);
  };

  const handlePress = (index) => {
    if (deleteState) {
      Alert.alert(
        "Confirm delete",
        "Are you sure you want to delete this collection?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => {
              collections.splice(index, 1);
              setDeleted((curr) => [...curr, collections[index]]);
            },
          },
        ]
      );
    } else {
      navigation.navigate("DetailScreen", {
        collectionIndex: index,
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
              onChangeText={handleChange}
              onSubmitEditing={(event) => handleAdd(event)}
            />
            <Dialog.Button label="Cancel" onPress={() => setAddState(false)} />
            <Dialog.Button label="Create" onPress={handleAdd} />
          </Dialog.Container>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Welcome, {user.username}!</Text>
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
            <View>
              {collections.map((collection, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => handlePress(i)}
                  style={
                    deleteState
                      ? { backgroundColor: "rgba(196, 0, 0, 0.2)" }
                      : { backgroundColor: "transparent" }
                  }
                >
                  <Collection collection={collection} />
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
  collectionContainer: {
    height: 120,
    width: "80%",
    backgroundColor: "black",
  },
});
