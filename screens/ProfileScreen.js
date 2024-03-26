// user profile screen

import { Text, View, StyleSheet } from "react-native";
import ProfileCard from "../Components/User/ProfileCard";
import ProfileImg from "../assets/images/profileImg.png";

const user = [
  {
    id: 1,
    name: "Bud Dozer",
    image: ProfileImg,
    bio: "🌲 Skiing adict 🌿 | Sending big backflips! 🏞️",
    activities: [
      "Skiing",
      "Backcountry SKiing",
    ],
  }
];

function ProfileScreen() {
  return (
    <View>
      <ProfileCard user={user[0]}/> 
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

export default ProfileScreen;
