import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import EmptyTrending from "./EmptyTrending";
import * as Animatable from 'react-native-animatable';
import { icons } from "@/constants";

const zoomIn = {
  0: {scale: 0.85},
  1: {scale: 1}
}

const zoomOut = {
  0: {scale: 1},
  1: {scale: 0.85}
}

const TrendyPosts = ({ activeItem, item }) => {
  const [ play, setPlay ] = useState(false);

  return(
    <Animatable.View  animation={activeItem === item.$id ? zoomIn : zoomOut} duration={500}>
      {play ? (
        <Text style={{color:'white', fontSize: 12}}>Elon Mushk</Text>
      ) : (
        <TouchableOpacity activeOpacity={0.8} style={[styleSheet.imageSlider, styleSheet.alignCenter]} onPress={() => setPlay(!false) }>
          <ImageBackground source={{uri: item.thumbnail}} resizeMode="cover" style={styleSheet.sliderImages} />
          <Image source={icons.play} resizeMode="contain" style={styleSheet.videoPlayButton} />
        </TouchableOpacity>
      )}
    </Animatable.View>
  )
}

const TrendingSection = ({ posts }: { posts: { id: number }[] }) => {
  const [ activeItem , setActiveItem ] = useState(posts[0]);

  const viewableItemsChange = ({ viewableItems }: {viewableItems: any}) => {
    if(viewableItems.length > 0) {}
    setActiveItem(viewableItems[0].key)
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendyPosts activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChange}
      viewabilityConfig={{itemVisiblePercentThreshold: 70}}
      contentOffset={{ x: 100, y: 0 }}
      horizontal
      ListEmptyComponent={() => (
        <EmptyTrending title= 'No Videos Found' subtitle='Be the first to create video' />
      )}
    />
  );
};

export default TrendingSection;

const styleSheet = StyleSheet.create({
  alignCenter: {
    justifyContent: "center",
    alignItems: "center",
  },

  imageSlider: {
    position: "relative",
  },

  sliderImages: {
    height: 250,
    width: 180,
    borderRadius: 10,
    marginRight: 10,
    overflow: "hidden",
    boxShadow: "50",
  },

  videoPlayButton: {
    height: 40,
    width: 40,
    position: "absolute",
  },
});