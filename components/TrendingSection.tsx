import { View, Text, FlatList, TouchableOpacity, ImageBackground, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import EmptyTrending from "./EmptyTrending";
import * as Animatable from 'react-native-animatable';
import { icons } from "@/constants";

const zoomIn = {
  0: {scale: 0.8},
  1: {scale: 1}
}

const zoomOut = {
  0: {scale: 1},
  1: {scale: 0.8}
}

const TrendyPosts = ({ activeItem, item }) => {
  const [ play, setPlay ] = useState(false);
  // console.log(`${activeItem.$id} item id ${item.$id}`);
  return(
    <Animatable.View  animation={activeItem.$id === item.$id ? zoomOut : zoomIn} duration={500}>
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

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendyPosts activeItem={activeItem} item={item} />
      )}
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
    borderRadius: 20,
    marginRight: 15,
    overflow: "hidden",
    boxShadow: "50",
  },

  videoPlayButton: {
    height: 40,
    width: 40,
    position: "absolute",
  },
});