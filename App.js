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
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Explore">
        <Tab.Screen name="Messages" component={MessageScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Recent Expenses",
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// git checkout user_profile
