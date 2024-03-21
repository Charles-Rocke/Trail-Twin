import Card from "./Components/UserCard";
import { View, Text, StatusBar, StyleSheet } from "react-native";

export default function AppLayout() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
