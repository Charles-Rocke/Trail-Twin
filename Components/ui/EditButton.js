import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Feather } from "@expo/vector-icons";

function EditButton({ children, onPress, mode }) {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
      <Feather name="edit" size={16} color="black" />
      </Pressable>
    </View>
  );
}

export default EditButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  flat: {
    backgroundColor: GlobalStyles.colors.primary500,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
