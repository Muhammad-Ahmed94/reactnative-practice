import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HelloWave } from '@/components/HelloWave'
import { Slot } from 'expo-router'
import { Stack } from 'expo-router'

const RootLayout = () => {
  /* const handlePress = () => {
    Alert.alert(
      'Trivia questions',
      'Are you a male?',

      [
        {text: 'Yes', onPress: () => console.log('you are a male')},
        {text: 'No', onPress: () => console.log('you are Female')},
      ]
    )
  } */

  return (
    <>
    {/* <Slot /> */}
    <Stack>
      <Stack.Screen name='index' options={{headerShown:false}} />
    </Stack>
    </>
  )
}

export default RootLayout

/* const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }
}) */