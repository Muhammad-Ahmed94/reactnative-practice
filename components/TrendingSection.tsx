import { View, Text, FlatList } from "react-native";
import React from "react";
import EmptyTrending from "./EmptyTrending";

const TrendingSection = ({ posts }: { posts: { id: number }[] }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text style={{ color: "white", fontSize: 20 }}>{item.id}</Text>
      )}
      horizontal
      /* ListEmptyComponent={() => (
        <EmptyTrending title= 'No Videos Found' subtitle='Be the forst to create video' />
      )} */
    />
  );
};

export default TrendingSection;
