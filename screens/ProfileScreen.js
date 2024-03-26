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
    height: 60, 
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
