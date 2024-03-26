import React, { useState, useRef } from "react";
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Carousel = ({ images }) => {

    // state for the index of the carousel image being viewed
  const [currentIndex, setCurrentIndex] = useState(0);

    // arrow function for updating state of the carousel index if there is a image to view
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  });

    // tests if the items fits on the screen so it can be viewed
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

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
      />
      <View style={styles.indicatorContainer}>
        {images.map((image, index) => (
          <View
            key={image.id.toString()}
            style={[
              styles.indicator,
              currentIndex === index
                ? styles.indicatorActive
                : styles.indicatorInactive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    position: "relative",
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    width: width,
  },
  image: {
    width: "95%",
    height: 200,
    borderRadius: 15,
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
    backgroundColor: "black",
  },
});

export default Carousel;
