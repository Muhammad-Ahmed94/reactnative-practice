import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const VideoCard = ({ video }) => {
  return (
    <View>
      <Text style={styleSheet.color}>{video.title}</Text>
      <Text>hey there</Text>

    </View>
  )
}

export default VideoCard

const styleSheet = StyleSheet.create({
    color: {
        color: 'red'
    }
})