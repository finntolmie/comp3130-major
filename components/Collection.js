import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Collection({ collection, navigation }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("DetailScreen", {
          name: collection.name,
          photos: collection.photos,
        })
      }
    >
      <View style={styles.collectionWrapper}>
        <View style={styles.left}>
          <Text style={styles.collectionTitle}>{collection.name}</Text>
          <Text style={styles.collectionDetail}>
            {collection.photos.length} Memories
          </Text>
        </View>
        <View style={styles.right}>
          <MaterialIcons name="arrow-forward-ios" size={40} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  collectionWrapper: {
    height: 120,
    width: "80%",
    marginVertical: 20,
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
