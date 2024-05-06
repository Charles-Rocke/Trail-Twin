import "react-native-url-polyfill/auto";
import ExploreScreen from "./screens/ExploreScreen";
import MessageScreen from "./screens/Messages/MessageScreen";
import ProfileScreen from "./screens/ProfileScreen";
import FilterScreen from "./screens/FilterScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SearchScreen from "./screens/SearchScreen";
import ChatScreen from "./screens/Messages/ChatScreen";
import NotificationIcon from "./Components/ui/NotificationIcon";
import NotificationScreen from "./screens/NotificationScreen";

import SettingsButton from "./Components/ui/SettingsButton";
import FilterButton from "./Components/ui/FilterButton";
import SearchButton from "./Components/ui/SearchButton";
import Auth from "./Components/Auth/Auth";

import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";
import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import { Session } from "@supabase/supabase-js";

const BottomTab = createBottomTabNavigator();
const ProfileStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();
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
                name="notifications-outline"
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
      <MessageStack.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          presentation: "modal",
        }}
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
          headerBackTitle: "Custom Back",
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

function ExploreStackScreen({ navigation }) {
  return (
    <ExploreStack.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: GlobalStyles.colors.primary50,
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.green400,
      })}
    >
      <ExploreStack.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          title: "Explore",
          headerBackTitle: "Custom Back",
          headerBackTitleStyle: { fontSize: 30 },
          headerLeft: () => {
            return (
              <SearchButton
                color={GlobalStyles.colors.primary50}
                onPress={() => navigation.navigate("Search")}
              />
            );
          },
          headerRight: () => {
            return (
              <FilterButton
                color={GlobalStyles.colors.primary50}
                onPress={() => navigation.navigate("Filter")}
              />
            );
          },
        }}
      />
      <ExploreStack.Screen name="Filter" component={FilterScreen} />
      <ExploreStack.Screen name="Search" component={SearchScreen} />
    </ExploreStack.Navigator>
  );
}

export default function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  return (
    <>
      <StatusBar style="light" />
      {!session ? (
        <Auth />
      ) : (
        session.user &&
        console.log(session.user) && (
          <NavigationContainer>
            <BottomTab.Navigator
              initialRouteName="Explore"
              screenOptions={({ navigation }) => ({
                headerStyle: {
                  backgroundColor: GlobalStyles.colors.primary500,
                },
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
                    alignSelf: "center",
                    marginBottom: 0,
                  },
                  tabBarLabelStyle: {
                    display: "none",
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
                name="Explore"
                component={ExploreStackScreen}
                options={{
                  headerShown: false,
                  tabBarIconStyle: {
                    alignSelf: "center",
                    marginBottom: 0,
                  },
                  tabBarLabelStyle: {
                    display: "none",
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
                    alignSelf: "center",
                    marginBottom: 0,
                  },
                  tabBarLabelStyle: {
                    display: "none",
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
        )
      )}
    </>
  );
}
