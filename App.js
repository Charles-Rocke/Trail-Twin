// Correct repo?
// this is owen again
// Charles commit
// Owens comment 2
import Card from "./Components/User/UserCard";
import AppLayout from "./AppLayout";
import ExploreScreen from "./screens/ExploreScreen";
import MessageScreen from "./screens/MessageScreen";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Explore">
        <Tab.Screen name="Messages" component={AppLayout} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Profile" component={MessageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// git checkout user_profile
