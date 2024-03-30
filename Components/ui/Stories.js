import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import friend1 from "../../assets/images/friends/friend1.png";
import friend2 from "../../assets/images/friends/friend2.png";
import friend3 from "../../assets/images/friends/friend3.png";

// Sample data for the friends
const friends = [
  { id: "1", name: "Friend 1", imageUri: friend1 },
  { id: "2", name: "Friend 2", imageUri: friend2 },
  { id: "3", name: "Friend 3", imageUri: friend3 },
  { id: "4", name: "Friend 3", imageUri: friend2 },
  { id: "5", name: "Friend 3", imageUri: friend1 },

  // Add more friends as needed
];

function Stories() {
  // Function to render each item in the list
  const renderItem = ({ item }) => (
    <View style={styles.friendContainer}>
      <Image source={item.imageUri} style={styles.friendImage} />
      <Text style={styles.friendText}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={friends}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  friendContainer: {
    width: 100, // Adjust the width as needed
    marginTop: 10,
    paddingBottom: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0", // Example background color
  },
  friendImage: {
    width: 80, // Adjust the width as needed
    height: 80, // Adjust the height as needed
    borderRadius: 40, // This makes the image rounded
  },
  friendText: {
    fontSize: 16,
  },
});

export default Stories;
