import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import CustomButton from './CustomButton';
import { router } from 'expo-router';

const EmptyTrending = ({title, subtitle}: {title:string, subtitle: string}) => {
  return (
    <View style={styles.alignCenter}>
      <Image
        source={images.empty}
        resizeMode="contain"
        style={{ height: 100, width: 100 }}
      />
      <Text style={{ color: "#9A9A98", fontSize: 15 }}>{title}</Text>
      <Text style={{ color: "white", fontSize: 20 }}>{subtitle}</Text>

      <CustomButton
        title="Create Video"
        handlePress={() => router.push("/create")}
        otherStyles={{marginTop: -30}}
      />
    </View>
  );
}

export default EmptyTrending

const styles = StyleSheet.create({
  alignCenter: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});