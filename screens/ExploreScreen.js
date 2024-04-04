import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import UserCard from "../Components/User/UserCard";
import ProfileImg from "../assets/images/profileImg.png";

const users = [
  {
    id: 1,
    name: "John Doe",
    username: 'DangoDo',
    images: [
      {
        id: 1,
        uri: "https://images.ctfassets.net/0wjmk6wgfops/nb3Q0W8VmjzthrOMiSzPt/6b8bf6ccb00141d84d32829455d073a9/Skier_resize_AdobeStock_617199939.jpeg?w=1200&h=630&f=center&fit=fill",
      },
      {
        id: 2,
        uri: "https://img.redbull.com/images/c_crop,w_2400,h_1200,x_0,y_0,f_auto,q_auto/c_scale,w_1200/redbullcom/2020/3/6/uu3ftm93natou0wgoirx/tahnee-seagrave-uci-mtb-world-championships-2019",
      },
      {
        id: 3,
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
      },
    ],
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
    images: [
      {
        id: 1,
        uri: "https://images.ctfassets.net/0wjmk6wgfops/nb3Q0W8VmjzthrOMiSzPt/6b8bf6ccb00141d84d32829455d073a9/Skier_resize_AdobeStock_617199939.jpeg?w=1200&h=630&f=center&fit=fill",
      },
      {
        id: 2,
        uri: "https://img.redbull.com/images/c_crop,w_2400,h_1200,x_0,y_0,f_auto,q_auto/c_scale,w_1200/redbullcom/2020/3/6/uu3ftm93natou0wgoirx/tahnee-seagrave-uci-mtb-world-championships-2019",
      },
      {
        id: 3,
        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg/1200px-Hiking_to_the_Ice_Lakes._San_Juan_National_Forest%2C_Colorado.jpg",
      },
    ],
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
