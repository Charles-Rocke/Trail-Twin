import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Text, List } from "react-native-paper";
import Button from "../ui/Button";
import Carousel from "../ui/Carousel";

function UserCard({ user }) {
  return (
    <Card style={styles.userCard}>
      <Carousel images={user.images} showEditButton={false} />
      <Card.Content>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={{ margin: 4 }}>@{user.username}</Text>
        <Text style={styles.title}>Bio</Text>
        <List.Item description={user.bio} />
        <Text style={styles.title}>Activities</Text>
        <List.Item description={user.activities} />
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
  title: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 4,
  },
  button: {
    minWidth: 120,
    margin: 8,
  },
});

export default UserCard;
