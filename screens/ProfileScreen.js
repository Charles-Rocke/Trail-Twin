import React from "react";
import { View, StyleSheet } from "react-native";
import ProfileCard from "../Components/User/ProfileCard";
import { useSelector } from "react-redux";

const userObj = {
  id: 1,
  name: "Bud Dozer",
  username: "budflippy",
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
  bio: " Skiing | Sending big backflips! ",
  activities: ["Skiing", "Backcountry Skiing"],
};

function ProfileScreen({ navigation }) {
  const userFromRedux = useSelector((state) => state.auth.user);

  // Use the user object from Redux, or fall back to the static user object
  const user = userFromRedux || userObj;
  return (
    <View style={styles.container}>
      <ProfileCard user={user} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ProfileScreen;
