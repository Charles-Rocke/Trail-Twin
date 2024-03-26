// Correct repo?
// this is owen again
// Charles commit
// Owens comment 2
import Card from "./Components/User/UserCard";
import ExploreScreen from "./screens/ExploreScreen";
import MessageScreen from "./screens/MessageScreen";
import ProfileScreen from "./screens/ProfileScreen";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Explore"
          screenOptions={({ navigation }) => ({
            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            headerTintColor: GlobalStyles.colors.primary50,
            tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
            tabBarActiveTintColor: GlobalStyles.colors.green400,
          })}
        >
          <Tab.Screen
            name="MessageScreen"
            component={MessageScreen}
            options={{
              tabBarLabel: "",
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
          <Tab.Screen
            name="ExploreScreen"
            component={ExploreScreen}
            options={{
              tabBarLabel: "",
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
          <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              tabBarLabel: "",
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
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

// git checkout user_profile
