import { Text, View, StyleSheet } from "react-native";
import Stories from "../../Components/ui/Stories";
import MessageSection from "../../Components/ui/Messages/MessageSection";

function MessageScreen() {
  return (
    <>
      <View style={{ marginBottom: 12 }}>
        <Stories />
      </View>
      <View style={{ flex: 1 }}>
        <MessageSection />
      </View>
    </>
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
