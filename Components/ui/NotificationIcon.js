import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

function NotificationIcon({ onPress, color }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View>
        <Ionicons name="notifications-outline" size={24} color={color} />
      </View>
    </Pressable>
  );
}

export default NotificationIcon;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.primary100,
    borderRadius: 4,
  },
});
