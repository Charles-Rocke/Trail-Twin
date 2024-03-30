import { Text, View, StyleSheet } from "react-native";
import HorizontalScroll from "../Components/ui/HorizontalScroll";
import MessageSection from "../Components/ui/MessageSection";

function MessageScreen() {
  return (
    <>
      <View style={{ marginBottom: 12 }}>
        <HorizontalScroll />
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
