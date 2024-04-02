import * as React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Avatar, Card, Text } from "react-native-paper";
import EditButton from "../ui/EditButton";
import Carousel from "../ui/Carousel";

function ProfileCard({ user }) {
  return (
    <Card style={styles.card}>
      <View >
        <EditButton />
        <Carousel images={user.images} />
      </View>
      <Card.Content>
        <Text style={styles.title}>{user.name}</Text>

        <View style={styles.row}>
          <View style={styles.listItem}>
            <Text style={styles.listTitle}>Bio</Text>
            <Text>{user.bio}</Text>
          </View>
          <EditButton />
        </View>

        <View style={styles.row}>
          <View style={styles.listItem}>
            <Text style={styles.listTitle}>Activities</Text>
            <Text>{user.activities.join(", ")}</Text>
          </View>
          <EditButton />
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  listItem: {
    flex: 1,
  },
  listTitle: {
    fontWeight: "bold",
  },
});

export default ProfileCard;
