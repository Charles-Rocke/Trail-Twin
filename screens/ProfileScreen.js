import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileCard from '../Components/User/ProfileCard';
import SettingsButton from '../Components/ui/SettingsButton';
import ProfileImg from '../assets/images/profileImg.png';

const user = [
  {
    id: 1,
    name: 'Bud Dozer',
    image: ProfileImg,
    bio: '🌲 Skiing addict 🌿 | Sending big backflips! 🏞️',
    activities: ['Skiing', 'Backcountry Skiing'],
  },
];

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
    backgroundColor: '#fff',
  },
  navBar: {
    height: 60, // Adjust the height as needed
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // This pushes the title to the left and settings button to the right
    backgroundColor: '#f8f8f8', // Light grey background, change as needed
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1', // Light grey border for some separation
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  settingsButton: {
    // If your SettingsButton component already has padding/margin, you might not need this
  },
});

export default ProfileScreen;
