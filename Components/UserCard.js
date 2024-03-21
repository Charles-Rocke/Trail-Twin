import * as React from "react";
import { StyleSheet } from "react-native";
import { Avatar, Button, Card, Text, List } from "react-native-paper";

const UserCard = () => (
  <Card style={styles.userCard}>
    <Card.Cover
      style={styles.userCard}
      source={{ uri: "https://picsum.photos/700" }}
    />
    <Card.Content>
      <Text variant="titleLarge">User name</Text>
      <List.Item
        title="Bio"
        description="🌲 Outdoor Enthusiast 🌿 | Connecting with Like-minded Adventurers 🏞️"
      />
      <List.Item
        title="Activities"
        description="Hey there! I'm [Your Name], a nature lover on a quest to meet fellow outdoor enthusiasts! 🚵‍♂️ Whether it's hiking through majestic trails, camping under the stars, or hitting the slopes for some snowboarding fun, count me in! 🌌 Let's share stories, plan epic adventures, and explore the great outdoors together! 🌄 Join me in discovering new paths and creating unforgettable memories! 🌟 #AdventureAwaits #NatureLover #OutdoorLife 🌿"
      />
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  userCard: {
    justifyContent: "center",
  },
});

export default UserCard;
