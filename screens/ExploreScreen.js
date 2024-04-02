import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import UserCard from "../Components/User/UserCard";
import ProfileImg from "../assets/images/profileImg.png";

const users = [
  {
    id: 1,
    name: "Dirty Dan",
    username: 'Dangotdirty',
    image: ProfileImg,
    bio: "🌲 Outdoor Enthusiast 🌿 | Connecting with Like-minded Adventurers 🏞️",
    activities: [
      "hiking through majestic trails",
      "camping under the stars",
      "hitting the slopes for some snowboarding fun",
    ],
  },
  {
    id: 2,
    name: "Michael",
    username: 'mcGamer',
    image: ProfileImg,
    bio: "🌲 Outdoor Enthusiast 🌿 | Connecting with Like-minded Adventurers 🏞️",
    activities:
      "Hey there! I'm Jimmy, a nature lover on a quest to meet fellow outdoor enthusiasts! 🚵‍♂️ Whether it's hiking through majestic trails, camping under the stars, or hitting the slopes for some snowboarding fun, count me in! 🌌 Let's share stories, plan epic adventures, and explore the great outdoors together! 🌄 Join me in discovering new paths and creating unforgettable memories! 🌟 #AdventureAwaits #NatureLover #OutdoorLife 🌿",
  },
];

function ExploreScreen() {
  const renderItem = ({ item }) => <UserCard user={item} />; // Pass user data as prop to UserCard

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignText: "center",
    justifyContent: "center",
  },
});
export default ExploreScreen;
