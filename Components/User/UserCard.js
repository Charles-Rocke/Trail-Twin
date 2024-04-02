import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Card, Text, List } from "react-native-paper";
import Button from "../ui/Button";
import ProfileImg from "../../assets/images/profileImg.png";

function UserCard({ user }) {
  return (
    <Card style={styles.userCard}>
      <Card.Cover style={styles.userCard} source={ProfileImg} />
      <Card.Content>
        <Text variant="titleLarge">{user.name}</Text>
        <List.item title="Username" description={`@${user.username}`}/>
        <List.Item title="Bio" description={user.bio} />
        <List.Item title="Activities" description={user.activities} />
      </Card.Content>
      <View style={styles.button}>
        <Button onPress={() => {}} mode="flat">
          Add Friend
        </Button>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  userCard: {
    margin: 10,
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    margin: 8,
  },
});

export default UserCard;
