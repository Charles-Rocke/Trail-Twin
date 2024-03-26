import { FlatList } from "react-native";
import UserCard from "./UserCard";

function renderExpenseItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function UserList() {
  return (
    <FlatList
      data={users}
      renderItem={UserCard}
      keyExtractor={(user) => user.id}
    />
  );
}

export default UserList;
