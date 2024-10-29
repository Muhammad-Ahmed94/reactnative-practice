import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import colors from '@/constants/colors'

const AuthLayout = () => {
  return (
    <>
    <Stack>
      <Stack.Screen name='sign-in' options={{headerShown: false}} />
      <Stack.Screen name='sign-up' options={{headerShown: false}} />
    </Stack>
    {/* <StatusBar backgroundColor={colors.white} style='light' /> */}
    </>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})