import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import colors from '@/constants/colors';

const Search = () => {
  const { query } = useLocalSearchParams();

  return (
    <SafeAreaView style={{backgroundColor: colors.primary, height: '100%'}}>
      <Text style={{ fontSize: 30, color: colors.white }}>{query}</Text>
    </SafeAreaView>
  );
}

export default Search

const styles = StyleSheet.create({})