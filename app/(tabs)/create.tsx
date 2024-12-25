import { ResizeMode, Video } from 'expo-av';
import * as DocumentPicker from 'expo-document-picker';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';

import CustomButton from '@/components/CustomButton';
import FormFeild from '@/components/FormFeild';
import { icons } from '@/constants';
import colors from '@/constants/colors';
import { useGlobalContext } from '@/context/GlobalProvider';
import { createVideo } from '@/lib/appwrite';

const Create = () => {
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
  });
  const [uploading, setIsUploading] = useState(false);
  const { user } = useGlobalContext();

  const documentPicker = async (documentType) => {
    const result = await DocumentPicker.getDocumentAsync({
      type:
        documentType === "image"
          ? ["image/png", "image/jpg", "image/jpeg"]
          : ["video/mp4", "video/gif"],
    });

    if (!result.canceled) {
      if (documentType === "image") {
        setForm({ ...form, thumbnail: result.assets[0] });
      }
      if (documentType === "video") {
        setForm({ ...form, video: result.assets[0] });
      }
    }
  };

  const submitVideo = async () => {
    if (!form.prompt || !form.thumbnail || !form.title || !form.video) {
      return Alert.alert("Missing values", "Please fill in all the fields");
    }

    setIsUploading(true)
    try {
      await createVideo({
        ...form,
        userId: user.$id.toString(),
      });

      Alert.alert("Success", "Post uploaded successfully");
      router.push("/home");
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "Could not upload the files to server");
    } finally {
      setForm({
        title: "",
        video: null,
        thumbnail: null,
        prompt: "",
      });

      setIsUploading(false);
    }
  };

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

          <TouchableOpacity onPress={() => documentPicker("image")}>
            {form.thumbnail ? (
              <Image
                style={{ width: "100%", height: 200 }}
                source={{ uri: form.thumbnail.uri }}
                resizeMode="contain"
              />
            ) : (
              <View style={[styles.uploadVideoContent, { height: 70 }]}>
                <View
                  style={[
                    styles.uploadVideoIcon,
                    styles.alignCenter,
                    {
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "100%",
                      gap: 5,
                    },
                  ]}
                >
                  <Image
                    source={icons.upload}
                    resizeMode="contain"
                    style={{ padding: 15, height: 10, width: 10 }}
                  />
                  <Text
                    style={{
                      color: colors.secondary,
                      fontWeight: "bold",
                      fontSize: 15,
                    }}
                  >
                    Video Thumbnail
                  </Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.uploadVideoContainer}>
          <Text style={styles.colorWhite}>Upload your video here</Text>

          <TouchableOpacity onPress={() => documentPicker("video")}>
            {form.video ? (
              <Video
                style={styles.videoStyles}
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
};

export default Create;

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
    backgroundColor: "#4A4A51", // Light shade
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

  videoStyles: {
    height: 200,
    width: "100%",
    marginTop: 10,
  },
});
