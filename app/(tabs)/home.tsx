import {
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@/constants/colors";
import { images } from "@/constants";
import SearchInput from "@/components/SearchInput";
import TrendingSection from "@/components/TrendingSection";
import EmptyTrending from "@/components/EmptyTrending";
import { getPostsDocuments, getTrendyPosts } from "@/lib/appwrite";
import useAppWrite from "@/lib/useAppwrite";
import VideoCard from "@/components/VideoCard";
import { useGlobalContext } from "@/context/GlobalProvider";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { user } = useGlobalContext();
  
  const { data: posts, reloadRefetch } = useAppWrite(getPostsDocuments);
  const { data: trendyPosts } = useAppWrite(getTrendyPosts);

  //* Pull-down refresh function
  const onRefreshing = async () => {
    setRefreshing(true);
    await reloadRefetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, flex: 1 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard video={{title: item.title, thumbnail: item.thumbnail, video:item.video}} />}
        ListHeaderComponent={() => (
          <View style={styles.homeContainer}>
            <View style={styles.homeInnerContainer}>
              <View style={styles.homeTitleContainer}>
                <Text style={[styles.textWhite, styles.homeTitle]}>
                  Welcome {user?.name ?? "Guest"}
                </Text>
                <Image
                  source={images.logoSmall}
                  resizeMode="contain"
                  style={{ height: 30, width: 30 }}
                />
              </View>

              <SearchInput placeholder="search video you want" />

              <View>
                <Text style={[styles.textWhite, styles.fontSize20]}>
                  Latest Videos
                </Text>
                <TrendingSection posts={trendyPosts ?? []} />
              </View>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyTrending
            title="No Videos Found"
            subtitle="Be the first to create video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefreshing} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;

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
