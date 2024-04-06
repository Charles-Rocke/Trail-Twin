import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  FlatList,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import friend1 from "../assets/images/friends/friend1.png";
import { AntDesign } from "@expo/vector-icons";
import IconButton from "../Components/ui/IconButton";

// Sample data for notifications
const notifications = [
  {
    id: "1",
    profileImage: friend1,
    name: "John DoesherKosher",
    message: "Friend request",
  },
  // Add more notifications as needed
];

const NotificationItem = ({ item, onAccept, onDecline }) => (
  <Pressable
    style={({ pressed }) => [
      styles.itemContainer,
      pressed && styles.pressed, // Apply pressed style when item is pressed
    ]}
    onPress={() => console.log("Item pressed")} // Handle press action here
  >
    <Image source={item.profileImage} style={styles.profileImage} />
    <View style={styles.infoContainer}>
      <Text style={styles.name} numberOfLines={1}>
        {item.name}
      </Text>
      <Text style={styles.message} numberOfLines={1}>
        {item.message}
      </Text>
    </View>
    <View style={styles.buttonsContainer}>
      <View style={styles.buttonWrapper}>
        <IconButton title="Accept" onPress={() => console.log("Accept")}>
          <AntDesign name="checkcircleo" size={36} color="limegreen" />
        </IconButton>
      </View>
      <View style={styles.buttonWrapper}>
        <IconButton title="Decline" onPress={() => console.log("Declined")}>
          <AntDesign name="closecircleo" size={36} color="darkred" />
        </IconButton>
      </View>
    </View>
  </Pressable>
);

function NotificationScreen() {
  const renderItem = ({ item }) => (
    <NotificationItem
      item={item}
      onAccept={(id) => console.log(`Accepted request with id: ${id}`)}
      onDecline={(id) => console.log(`Declined request with id: ${id}`)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        onEndReached={() => console.log("Load more notifications")}
        onEndReachedThreshold={0.3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: Dimensions.get("window").width, // Full screen width
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%", // Ensure the container takes the full width of its parent
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1, // This will take up the remaining space after the profile image and buttons
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    color: "#666",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  buttonWrapper: {
    margin: 10, // Space between buttons
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "darkgray",
  },
});

export default NotificationScreen;
