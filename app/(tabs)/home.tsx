import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '@/constants/colors'
import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'
import TrendingSection from '@/components/TrendingSection'
import EmptyTrending from '@/components/EmptyTrending'

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, flex: 1}}>
      <FlatList
        data={[{id: 'muneeb'}]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 40, color: colors.white }}>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View style={styles.homeContainer}>
            <View style={styles.homeInnerContainer}>
              <View style={styles.homeTitleContainer}>
                <Text style={[styles.textWhite, styles.homeTitle]}>
                  Welcome Muneeb!
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
                <TrendingSection posts={[{ id: 1 }, { id: 2 }, { id: 3 }]} />
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
      />
    </SafeAreaView>
  );
}

export default Home

const styles = StyleSheet.create({
  centerAlign: {
    justifyContent: "center",
    alignItems: "center",
  },

  textWhite: {
    color: colors.white,
  },

  fontSize20: {
    fontSize: 20
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