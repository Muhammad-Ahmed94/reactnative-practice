import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '@/constants/colors'
import { images } from '@/constants'
import FormFeild from '@/components/FormFeild'

const SignIn = () => {
  return (
    <>
    <SafeAreaView style={styles.mainStyle}>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View style={styles.viewStyle}>
          <Image source={images.logo} resizeMode='contain' style={styles.logo} />
          <Text style={styles.text}>Log In To Aora</Text>
        </View>

        {/* Add states to keep track of input values */}
        <View>
          <FormFeild title='email' />
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  )
}

export default SignIn

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: colors.primary,
    height: "100%",
  },

  viewStyle: {
    width: "100%",
    flex: 1,
    padding: 20,
  },

  logo: {
    width: "30%",
    height: "10%",
  },

  text: {
    color: colors.white,
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  }
});