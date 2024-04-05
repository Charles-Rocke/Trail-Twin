import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";

import friend1 from "../../../assets/images/friends/friend1.png";
import friend2 from "../../../assets/images/friends/friend2.png";
import friend3 from "../../../assets/images/friends/friend3.png";
import { useNavigation } from "@react-navigation/native";

// Sample data for the messages
const messages = [
  {
    id: "1",
    name: "Friend 1",
    imageUri: friend1,
    message:
      "Hey, how are you? I just wanted to check in and see how you are doing.",
  },
  {
    id: "2",
    name: "Friend 2",
    imageUri: friend2,
    message:
      "Check out this cool new app I found. It has some really interesting features.",
  },
  {
    id: "3",
    name: "Friend 3",
    imageUri: friend3,
    message:
      "I just posted a new photo. It's from our trip last weekend. You should see it!",
  },
  {
    id: "4",
    name: "Friend 1",
    imageUri: friend1,
    message:
      "Hey, how are you? I just wanted to check in and see how you are doing.",
  },
  {
    id: "5",
    name: "Friend 2",
    imageUri: friend2,
    message:
      "Check out this cool new app I found. It has some really interesting features.",
  },
  {
    id: "6",
    name: "Friend 3",
    imageUri: friend3,
    message:
      "I just posted a new photo. It's from our trip last weekend. You should see it!",
  },
  {
    id: "7",
    name: "Friend 1",
    imageUri: friend1,
    message:
      "Hey, how are you? I just wanted to check in and see how you are doing.",
  },
  {
    id: "8",
    name: "Friend 2",
    imageUri: friend2,
    message:
      "Check out this cool new app I found. It has some really interesting features.",
  },
  {
    id: "9",
    name: "Friend 3",
    imageUri: friend3,
    message:
      "I just posted a new photo. It's from our trip last weekend. You should see it!",
  },
  // Add more messages as needed
];

function MessageSection() {
  const navigation = useNavigation();

  // Function to render each item in the list
  function renderItem({ item }) {
    return (
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={() => navigation.navigate("Chat")}
      >
        <View style={styles.messageContainer}>
          <Image source={item.imageUri} style={styles.userImage} />
          <View style={styles.messageInfo}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userMessage} numberOfLines={2}>
              {item.message}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  }

  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userMessage: {
    fontSize: 14,
    color: "#666",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: "darkgray",
  },
});

export default MessageSection;
