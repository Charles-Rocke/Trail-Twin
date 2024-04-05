import React, { useState, useRef } from 'react';
import EditButton from '../ui/EditButton';
import { View, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Carousel = ({ images, showEditButton }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const navigateToImage = (index) => {
    if (index < 0) index = 0;
    if (index >= images.length) index = images.length - 1;
    setCurrentIndex(index);

    flatListRef.current.scrollToIndex({
      index,
      animated: false,
    });
  };

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={width}
        pagingEnabled
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        ref={flatListRef}
      />

      <TouchableOpacity
        style={[styles.touchZone, { left: 0 }]}
        onPress={() => navigateToImage(currentIndex - 1)}
      />
      <TouchableOpacity
        style={[styles.touchZone, { right: 0 }]}
        onPress={() => navigateToImage(currentIndex + 1)}
      />

      <View style={styles.indicatorContainer}>
        {images.map((image, index) => (
          <View
            key={image.id.toString()}
            style={[
              styles.indicator,
              currentIndex === index ? styles.indicatorActive : styles.indicatorInactive,
            ]}
          />
        ))}
      </View>

      {showEditButton && (
        <View style={styles.editButton}>
          <EditButton color={'white'} />
        </View>
      )}
    </View>
  );
};

const imageSize = width * 0.9;

const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",
    marginVertical: 10,
  },
  itemContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: imageSize,
    height: imageSize * 0.5625,
    borderRadius: 16,
    marginRight: 20,
    resizeMode: "cover",
  },
  touchZone: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "50%",
    zIndex: 20,
  },
  editButton: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  indicatorContainer: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: "gray",
  },
  indicatorActive: {
    backgroundColor: "white",
  },
  indicatorInactive: {
    backgroundColor: "gray",
  },
});

export default Carousel;
