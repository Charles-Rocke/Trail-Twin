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

const SettingsScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(true);
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

  const handlePrivacyPolicyPress = () => console.log("Privacy Policy pressed");
  const handleTermsOfServicePress = () => console.log("Terms of Service pressed");
  const handleHelpPress = () => console.log("Help pressed");
  const handleLogoutPress = () => console.log("Logout pressed");
  const handleDeleteAccountPress = () => console.log("Delete Account pressed");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Username</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="Username"
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <Text>Phone Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="phone-pad"
        placeholder="Phone Number"
      />
      <Text>Address</Text>
      <TextInput
        style={styles.input}
        onChangeText={setAddress}
        value={address}
        placeholder="Address"
      />
      <View style={styles.switchContainer}>
        <Text>Enable Notifications</Text>
        <Switch
          onValueChange={() =>
            setIsNotificationsEnabled((previousState) => !previousState)
          }
          value={isNotificationsEnabled}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text>Dark Mode</Text>
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
      <Button title="Delete Account" onPress={handleDeleteAccountPress} color="red" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    marginBottom: 20,
    padding: 10,
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default SettingsScreen;
