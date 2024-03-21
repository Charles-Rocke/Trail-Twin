import { Text, View, StyleSheet } from "react-native";

function MessageScreen() {
  return (
    <View>
      <Text>Message Screen</Text>
    </View>
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
export default MessageScreen;
