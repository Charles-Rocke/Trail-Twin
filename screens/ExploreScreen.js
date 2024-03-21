import { Text, View, StyleSheet, ScrollView } from "react-native";
import UserCard from "../Components/UserCard";

function ExploreScreen() {
  return (
    <ScrollView>
      <View>
        <UserCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignText: "center",
    justifyContent: "center",
  },
});
export default ExploreScreen;
