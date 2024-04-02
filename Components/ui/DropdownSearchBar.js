import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DATA = [{ id: '1', title: 'Item 1' }, { id: '2', title: 'Item 2' }]; // Example data

function DropdownSearchBar({ visible }) {
  const [searchQuery, setSearchQuery] = useState('');

  if (!visible) return null;

  return (
    <View style={styles.dropdownContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={DATA.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 50, // Adjust based on your layout
    left: 0,
    right: 0,
    zIndex: 1000, // Make sure the dropdown appears on top of other content
  },
  input: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default DropdownSearchBar;
