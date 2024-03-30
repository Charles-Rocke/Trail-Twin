import { Text, View, StyleSheet } from "react-native";
import Stories from "../../Components/ui/Stories";
import MessageSection from "../../Components/ui/Messages/MessageSection";
import { GlobalStyles } from "../../constants/styles";

function MessageScreen() {
  return (
    <>
      <View style={styles.storiesContainer}>
        <Stories />
      </View>
      <View style={{ flex: 1 }}>
        <MessageSection />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  storiesContainer: {
    backgroundColor: "#f0f0f0",
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Position the shadow at the bottom
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84,
  },
});
export default MessageScreen;
