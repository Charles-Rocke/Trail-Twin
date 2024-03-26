import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Carousel = ({ images }) => { 
  return (
    <FlatList
      data={images}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.uri }} style={styles.image} />
        </View>
      )}
      keyExtractor={item => item.id.toString()} 
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="fast"
      snapToInterval={width}
      pagingEnabled
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: width,
  },
  image: {
    width: '100%',
    height: 200,
  },
});

export default Carousel;
