import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '@/constants/colors';
import FormFeild from '@/components/FormFeild';
import { ResizeMode, Video } from 'expo-av';
import { icons } from '@/constants';
import { FlipInEasyX } from 'react-native-reanimated';

const Create = () => {
  const [ form, setForm ] = useState({
    title: '',
    video: null,
    thumbnail: null,
    prompt: ''
  })

  return (
    <SafeAreaView style={{backgroundColor: colors.primary, height: '100%'}}>
      <ScrollView style={{paddingHorizontal: 20, marginVertical: 18}}>
        <Text style={{color:'white', fontSize: 25, marginBottom: 30}}>Upload Videos</Text>
        <FormFeild 
        title='Video Title'
        value={form.title}
        placeholder='Give your video a title...'
        handleTextChange={(e) => setForm({...form, title: e})}
        />

        <View style={styles.uploadVideoContainer}>
          <Text style={styles.colorWhite}>Upload your video here</Text>

          <TouchableOpacity>
            {form.video ? (
              <Video 
              source={{uri: form.video.uri}} 
              resizeMode={ResizeMode.COVER}
              useNativeControls
              shouldPlay
              isLooping
              />
            ) : (
              <View style={[styles.uploadVideoContent]}>
                <View style={[styles.uploadVideoIcon, styles.alignCenter]}>
                  <Image source={icons.upload} resizeMode='contain' style={{padding: 15}} height={15} width={1} />
                </View>

              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.uploadVideoContainer}>
          <Text style={styles.colorWhite}>Thumbnail Image</Text>

          <TouchableOpacity>
            {form.thumbnail ? (
              <Image 
              source={{uri: form.thumbnail.uri}} 
              resizeMode='contain'
              />
            ) : (
              <View style={[styles.uploadVideoContent]}>
                <View style={[styles.uploadVideoIcon, styles.alignCenter]}>
                  <Image source={icons.upload} resizeMode='contain' style={{padding: 15}} height={15} width={1} />
                </View>

              </View>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Create

const styles = StyleSheet.create({
  alignCenter: {
    justifyContent: "center",
    alignItems: "center",
  },

  colorWhite: {
    color: colors.white,
    fontSize: 20,
  },

  uploadVideoContainer: {
    marginTop: 10,
  },

  uploadVideoContent: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 15,
    marginTop: 10,
    width: "100%",
    height: 200,
    display: "flex",
  },

  uploadVideoIcon: {
    padding: 8,
    borderWidth: 1,
    borderStyle: "dotted",
    borderColor: "yellow",
    borderRadius: 15,
    display: "flex",
    height: 60,
    width: 60,
    position: "relative",
    top: "50%",
    left: "50%",
    transform: [{translateY: '-50%'}, { translateX: '-50%'}],
    /*justifyContent: 'center',
    alignItems: 'center'*/
  },

});