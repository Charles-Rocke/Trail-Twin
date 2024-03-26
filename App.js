// Correct repo?
// this is owen again
// Charles commit
// Owens comment 2
import Card from "./Components/User/UserCard";
import AppLayout from "./AppLayout";
import ExploreScreen from "./screens/ExploreScreen";
import MessageScreen from "./screens/MessageScreen";
import ProfileScreen from "./screens/ProfileScreen";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Explore">
        <Tab.Screen 
          component={MessageScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="message-square" size={24} color="black" />
              ),
            }}
        />
        <Tab.Screen 
          component={ExploreScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="users" size={24} color="black" />
              ),
            }}
        />
        <Tab.Screen
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="user" size={24} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// git checkout user_profile
