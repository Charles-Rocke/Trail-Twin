import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import ProfileCard from "../Components/User/ProfileCard";
import SettingsButton from "../Components/ui/SettingsButton";

const user = [
  {
    id: 1,
    name: "Bud Dozer",
    images: [
      {
        id: 1,
        uri: "https://emilypost.com/client_media/images/Everyday_Etiquette_glade_optics_I_30st7mGAE_unsplash.jpg",
      },
      {
        id: 2,
        uri: "https://hips.hearstapps.com/hmg-prod/images/dumbbells-gym-64a3f4bc2fe31.jpg",
      },
      {
        id: 3,
        uri: "https://off.road.cc/sites/default/files/styles/970wide/public/thumbnails/image/2022%20downhill%20riding%201.jpg?itok=8QTJWvwe",
      },
    ],
    bio: "🌲 Skiing addict 🌿 | Sending big backflips! 🏞️",
    activities: ["Skiing", "Gym", "Mountain Biking"],
  },
];

console.log(user.images)


function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.navBar}>
        <Text style={styles.navTitle}>Trail Twin</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <SettingsButton />
        </TouchableOpacity>
      </View>
      <ProfileCard user={user[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  navBar: {
    height: 60,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e1e1",
  },
  navTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
