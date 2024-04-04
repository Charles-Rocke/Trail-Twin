import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchScreen = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (onSubmit && query) {
      onSubmit(query);
      setQuery('');
    }
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Search for user..."
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={handleSubmit} 
      />
      <Button
        title="Search"
        onPress={handleSubmit}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row', 
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center', 
    backgroundColor: '#fff', 
    margin: 20,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    marginRight: 10, 
  },
});

export default SearchScreen;
