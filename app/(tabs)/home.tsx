import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '@/constants/colors'
import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.primary }}>
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 40, color: colors.white }}>{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View style={styles.homeContainer}>
            <View style={styles.homeInnerContainer}>
              <View style={styles.homeTitleContainer}>
                <Text style={[styles.textWhite, styles.homeTitle]}>Welcome Muneeb!</Text>
                <Image source={images.logoSmall} resizeMode='contain' style={{height: 30, width: 30}} />
              </View>
              
              <SearchInput placeholder='search video you want' />
            </View>
          </View>
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

  /* homeSearchInput: {
    height: 28,
    width: '100%',
    padding: 15, 
    borderRadius: 8,
    borderColor: colors.white,
    marginHorizontal: 20,
    color: 'gray',
    fontSize: 20
    
  } */
});