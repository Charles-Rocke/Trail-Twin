import Card from "./Components/User/UserCard";
import ExploreScreen from "./screens/ExploreScreen";
import MessageScreen from "./screens/MessageScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsButton from "./Components/ui/SettingsButton";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";
import IconButton from "./Components/ui/IconButton";
import SettingsScreen from "./screens/SettingsScreen";
import NotificationIcon from "./Components/ui/NotificationIcon";
import NotificationScreen from "./screens/NotificationScreen";

/**
 *
 */
const NativeStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const ProfileStack = createNativeStackNavigator();
const MessageStack = createNativeStackNavigator();

function MessageStackScreen({ navigation }) {
  return (
    <MessageStack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: GlobalStyles.colors.primary50,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.green400,
      })}
    >
      <MessageStack.Screen
        name="MessageScreen"
        component={MessageScreen}
        options={{
          title: "Messages",
          headerBackTitle: "Custom Back", // Customize the back button label
          headerBackTitleStyle: { fontSize: 30 },
          headerRight: () => {
            return (
              <NotificationIcon
                color={GlobalStyles.colors.primary50}
                onPress={() => navigation.navigate("Notifications")}
              />
            );
          },
        }}
      />
      <MessageStack.Screen
        name="Notifications"
        component={NotificationScreen}
      />
    </MessageStack.Navigator>
  );
}

function ProfileStackScreen({ navigation }) {
  return (
    <ProfileStack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: GlobalStyles.colors.primary50,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.green400,
      })}
    >
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerBackTitle: "Custom Back", // Customize the back button label
          headerBackTitleStyle: { fontSize: 30 },
          headerRight: () => {
            return (
              <SettingsButton
                color={GlobalStyles.colors.primary50}
                onPress={() => navigation.navigate("Settings")}
              />
            );
          },
        }}
      />
      <ProfileStack.Screen name="Settings" component={SettingsScreen} />
    </ProfileStack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <BottomTab.Navigator
          initialRouteName="Explore"
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: GlobalStyles.colors.primary50,
            tabBarStyle: {
              backgroundColor: GlobalStyles.colors.primary500,
            },
            tabBarActiveTintColor: GlobalStyles.colors.green400,
          })}
        >
          <BottomTab.Screen
            name="Message"
            component={MessageStackScreen}
            options={{
              title: "Messages",
              headerShown: false,
              tabBarIconStyle: {
                // Adjust the icon style to remove white space
                alignSelf: "center", // Center the icon
                marginBottom: 0, // Remove bottom margin
              },
              tabBarLabelStyle: {
                // Ensure the label is not visible
                display: "none", // Hide the label
              },
              tabBarIcon: ({ focused, color, size }) => (
                <Feather
                  name="message-square"
                  size={size}
                  color={
                    focused
                      ? GlobalStyles.colors.green400
                      : GlobalStyles.colors.primary50
                  }
                />
              ),
            }}
          />
          <BottomTab.Screen
            name="ExploreScreen"
            component={ExploreScreen}
            options={{
              title: "Explore",
              tabBarIconStyle: {
                // Adjust the icon style to remove white space
                alignSelf: "center", // Center the icon
                marginBottom: 0, // Remove bottom margin
              },
              tabBarLabelStyle: {
                // Ensure the label is not visible
                display: "none", // Hide the label
              },
              tabBarIcon: ({ focused, color, size }) => (
                <Feather
                  name="users"
                  size={size}
                  color={
                    focused
                      ? GlobalStyles.colors.green400
                      : GlobalStyles.colors.primary50
                  }
                />
              ),
            }}
          />
          <BottomTab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
              headerShown: false,
              tabBarIconStyle: {
                // Adjust the icon style to remove white space
                alignSelf: "center", // Center the icon
                marginBottom: 0, // Remove bottom margin
              },
              tabBarLabelStyle: {
                // Ensure the label is not visible
                display: "none", // Hide the label
              },
              tabBarIcon: ({ focused, color, size }) => (
                <Feather
                  name="user"
                  size={size}
                  color={
                    focused
                      ? GlobalStyles.colors.green400
                      : GlobalStyles.colors.primary50
                  }
                />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}
