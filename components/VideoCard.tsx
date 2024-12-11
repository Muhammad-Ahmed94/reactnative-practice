import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import colors from '@/constants/colors'
import { icons } from '@/constants';

interface CardProps {
    title: string;
    thumbnail?:string
    video?: string
    username: string;
    avatar?: string;
}

const VideoCard: React.FC<CardProps> = ({ video: { title, thumbnail, video, }}) => {
  const [ play, setPlay ] = useState(false);

  return (
    <View style={styleSheet.mainContainer}>
      <View>
        <View style={styleSheet.containerHeader}>
          <View style={styleSheet.subHeader}>
            <Image
              source={icons.play}
              resizeMode="cover"
              style={styleSheet.avatarStyle}
            />
            <Text style={styleSheet.headerText} numberOfLines={1}>
              {title}
            </Text>
            {/* <Text style={styleSheet.subHeaderText} numberOfLines={1}>{username}</Text> */}
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={styleSheet.menuStyle}
            />
          </TouchableOpacity>
        </View>

        {play ? (
          <Text style={{ color: "white", fontSize: 15 }}>playing</Text>
        ) : (
          <TouchableOpacity activeOpacity={0.5} onPress={() => setPlay(!false)}>
            <Image
              source={{ uri: thumbnail }}
              resizeMode="contain"
              style={styleSheet.videoThumbnail}
            />
            <Image source={icons.play} resizeMode='contain' style={styleSheet.videoPlayButton} /* style={{height: 40, width: 40, position: 'absolute', alignSelf:'center', top: '50%', transform: [{translateY: '-50%'}]}} */ />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
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
    /* borderWidth: 1,
    borderColor: "red", */
    padding: 15,
    margin: 12,
    marginBottom: 18,
    height: 200,
    display: "flex",
    flexDirection: "column",
  },

  videoThumbnail: {
    height: '95%',
    width: '100%',
    borderRadius: 12,
  },

  videoPlayButton: {
    height: 40, 
    width: 40,
    position: 'absolute',
    alignSelf: 'center',
    top: '50%',
    transform: [{translateY: '-50%'}]
  },

  containerHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4
  },

  subHeader: {
    flexDirection:'row' 
  },

  /* subHeaderText: {
    color: colors.grayWhite,
    fontSize: 20
  }, */

  avatarStyle: {
    height: 30,
    width: 30,
    borderRadius: 12,
    marginRight: 4,
  },

  headerText: {
    color: colors.white,
    fontSize: 21
  },

  menuStyle: {
    height: 28,
    width: 28,
  },
});