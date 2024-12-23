/*
import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@/constants/colors";
import SearchInput from "@/components/SearchInput";
import EmptyTrending from "@/components/EmptyTrending";
import { searchPosts, userPosts } from "@/lib/appwrite";
import useAppWrite from "@/lib/useAppwrite";
import VideoCard from "@/components/VideoCard";
import { useLocalSearchParams } from "expo-router";
import { useGlobalContext } from "@/context/GlobalProvider";

const profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts } = useAppWrite(() => userPosts(user.$id));

  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, flex: 1 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <VideoCard
            video={{
              title: item.title,
              thumbnail: item.thumbnail,
              video: item.video,
            }}
          />
        )}
        ListHeaderComponent={() => (
          <View style={styles.homeContainer}>
            <View style={styles.homeInnerContainer}>
              <View style={styles.homeTitleContainer}>
                <Text style={[styles.textWhite, styles.homeTitle]}>
                </Text>
              </View>

              <SearchInput
                placeholder="search video you want"
                // initialQuery={query}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyTrending
            title="No Videos Found"
            subtitle="No video found for the search input"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default profile;

const styles = StyleSheet.create({
  centerAlign: {
    justifyContent: "center",
    alignItems: "center",
  },

  textWhite: {
    color: colors.white,
  },

  fontSize20: {
    fontSize: 20,
    marginBottom: 10,
  },

  homeContainer: {
    marginVertical: 25,
    marginHorizontal: 20,
  },

  homeInnerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "flex-start",
  },

  homeTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  homeTitle: {
    fontSize: 20,
  },
});
*/


import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import colors from '@/constants/colors';

const profile = () => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: colors.primary}}>
      <Text style={{color: colors.white, fontSize: 25, textAlign: 'center'}}>User Profile</Text>
    </SafeAreaView>
  );
}

export default profile