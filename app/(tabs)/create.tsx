import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '@/constants/colors';
import FormFeild from '@/components/FormFeild';
import { ResizeMode, Video } from 'expo-av';
import { icons } from '@/constants';
import { FlipInEasyX } from 'react-native-reanimated';
import CustomButton from '@/components/CustomButton';

const Create = () => {
  const [ form, setForm ] = useState({
    title: '',
    video: null,
    thumbnail: null,
    prompt: ''
  })
  const [ uploading, setIsUploading ] =useState(false)

  const documentPicker = () => {

  }

  const submitVideo = () => {

  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, height: "100%" }}>
      <ScrollView style={{ paddingHorizontal: 20, marginVertical: 18 }}>
        <Text style={{ color: "white", fontSize: 25, marginBottom: 30 }}>
          Upload Videos
        </Text>
        <FormFeild
          title="Video Title"
          value={form.title}
          placeholder="Give your video a title..."
          handleTextChange={(e) => setForm({ ...form, title: e })}
        />

        <FormFeild
          title="Video Prompt"
          value={form.prompt}
          placeholder="Prompt used to create the video"
          handleTextChange={(e) => setForm({ ...form, prompt: e })}
        />

        <View style={styles.uploadVideoContainer}>
          <Text style={styles.colorWhite}>Thumbnail Image</Text>

          <TouchableOpacity>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                resizeMode="contain"
              />
            ) : (
              <View style={[styles.uploadVideoContent, { height: 70, }]}>
                <View style={[styles.uploadVideoIcon, styles.alignCenter, {flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', gap: 5}]}>
                  <Image
                    source={icons.upload}
                    resizeMode="contain"
                    style={{ padding: 15, height: 10, width: 10 }}
                  />
                  <Text style={{color: colors.secondary, fontWeight: 'bold', fontSize: 15}}>Video Thumbnail</Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.uploadVideoContainer}>
          <Text style={styles.colorWhite}>Upload your video here</Text>

          <TouchableOpacity>
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
                resizeMode={ResizeMode.COVER}
                useNativeControls
                shouldPlay
                isLooping
              />
            ) : (
              <View style={[styles.uploadVideoContent]}>
                <View style={[styles.uploadVideoIcon, styles.alignCenter]}>
                  <Image
                    source={icons.upload}
                    resizeMode="contain"
                    style={{ padding: 15 }}
                    height={15}
                    width={1}
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={{ marginTop: 10, alignItems: "center" }}>
          <CustomButton
            title="Submit & Publish"
            isLoading={uploading}
            handlePress={submitVideo}
          />
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
    backgroundColor: "#4A4A51",
    borderRadius: 15,
    marginTop: 10,
    width: "100%",
    height: 200,
    display: "flex",
  },

  uploadVideoIcon: {
    padding: 8,
    borderRadius: 15,
    display: "flex",
    height: 60,
    width: 60,
    position: "relative",
    top: "50%",
    left: "50%",
    transform: [{ translateY: "-50%" }, { translateX: "-50%" }],
    /*justifyContent: 'center',
    alignItems: 'center'*/
  },
});