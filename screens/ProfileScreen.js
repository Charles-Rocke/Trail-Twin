import React, { useLayoutEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import ProfileCard from "../Components/User/ProfileCard";
import SettingsButton from "../Components/ui/SettingsButton";
import ProfileImg from "../assets/images/profileImg.png";
import IconButton from "../Components/ui/IconButton";

const user = [
  {
    id: 1,
    name: "Bud Dozer",
    image: ProfileImg,
    bio: "🌲 Skiing addict 🌿 | Sending big backflips! 🏞️",
    activities: ["Skiing", "Backcountry Skiing"],
  },
];

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ProfileCard user={user[0]} />
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
