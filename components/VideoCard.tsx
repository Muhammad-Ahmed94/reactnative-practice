import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import colors from '@/constants/colors'

interface CardProps {
    title: string;
    thumbnail?:string
    video?: string
    username: string;
    avatar?: string;
}

const VideoCard: React.FC<CardProps> = ({ video: { title, thumbnail, video }}) => {
  return (
    <View style={styleSheet.mainContainer}>
        <View>
            <Text style={[styleSheet.textWhite]}>{title}</Text>
            <Image source={{uri: thumbnail}} resizeMode='contain' style={styleSheet.videoThumbnail} />
        </View>
    </View>
  )
}

export default VideoCard

const styleSheet = StyleSheet.create({
  alignCenter: {
    alignItems: "center",
    justifyContent: "center",
  },

  textGray: {
    color: colors.grayWhite,
  },

  textWhite: {
    color: colors.white,
  },

  mainContainer: {
    borderWidth: 1,
    borderColor: "red",
    padding: 15,
    margin: 12,
    height: 200,
    display: "flex",
    flexDirection: "column",
  },

  videoThumbnail: {
    height: 50,
    width: 80
  }
});