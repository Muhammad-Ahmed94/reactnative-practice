import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'
import { Stack } from 'expo-router'

const RootLayout = () => {
  
  return (
    <>
    {/* <Slot /> */}
    <Stack >
      <Stack.Screen name='index' options={{headerShown:false}} />
      <Stack.Screen name='(auth)' options={{headerShown: false}} />
    </Stack>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  container: {
    display: 'flex',

  }
})
