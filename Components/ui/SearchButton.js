import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Feather } from "@expo/vector-icons";

function SearchButton({ onPress, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View>
        <Feather name="search" size={24} color={color} /> 
      </View>
    </Pressable>
  );
}

export default SearchButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
