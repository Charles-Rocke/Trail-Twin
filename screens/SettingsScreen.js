import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Switch,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../src/slices/authSlice";

function SettingsScreen() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const handlePrivacyPolicyPress = () => console.log("Privacy Policy pressed");
  const handleTermsOfServicePress = () =>
    console.log("Terms of Service pressed");
  const handleHelpPress = () => console.log("Help pressed");

  function handleLogoutPress() {
    console.log("Logout pressed");
    dispatch(logout());
  }

  const handleDeleteAccountPress = () => console.log("Delete Account pressed");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.firstTitle}>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />
      <Text style={styles.title}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <Text style={styles.title}>Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="phone-pad"
        placeholder="Phone Number"
      />
      <Text style={styles.title}>Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAddress}
        value={address}
        placeholder="Address"
      />
      <View style={styles.switchContainer}>
        <Text style={styles.title}>Enable Notifications</Text>
        <Switch
          onValueChange={() =>
            setIsNotificationsEnabled((previousState) => !previousState)
          }
          value={isNotificationsEnabled}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.title}>Dark Mode</Text>
        <Switch
          onValueChange={() =>
            setIsDarkModeEnabled((previousState) => !previousState)
          }
          value={isDarkModeEnabled}
        />
      </View>
      <Button title="Privacy Policy" onPress={handlePrivacyPolicyPress} />
      <Button title="Terms of Service" onPress={handleTermsOfServicePress} />
      <Button title="Help" onPress={handleHelpPress} />
      <Button title="Logout" onPress={handleLogoutPress} color="red" />
      <Button
        title="Delete Account"
        onPress={handleDeleteAccountPress}
        color="red"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    paddingHorizontal: 15, // Slightly increased for better spacing
    paddingVertical: 10, // Increased for a taller search bar
    alignItems: "center",
    backgroundColor: "#f2f2f2", // Lighter background for a subtle contrast
    margin: 20, // Adjust margin for better spacing from screen edges
    marginTop: 50, // Additional top margin to prevent overlap with status bar/navigation
    borderRadius: 30, // Increased for rounder edges
    borderWidth: 1, // Add a border
    borderColor: "#cccccc", // Light grey border color
    shadowColor: "#000", // Shadow for depth, works on iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Elevation for Android
  },
  firstTitle: {
    padding: 2,
    marginTop: 16,
    marginLeft: 16,
  },
  title: {
    padding: 2,
    marginLeft: 16,
  },
  switchContainer: {
    margin: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  input: {
    margin: 12,
    flex: 1,
    marginRight: 10, // Keep as is for spacing between the input and the button
    backgroundColor: "#ffffff", // Pure white background for the input field
    borderRadius: 5, // Rounded edges for the input field
    paddingHorizontal: 15, // Inner spacing for the text
    fontSize: 16, // Slightly larger text for better readability
    height: 40, // Fixed height for a more consistent appearance
  },
  // If you have control over the Button component styling, consider using a TouchableOpacity for better styling capabilities
});

export default SettingsScreen;
