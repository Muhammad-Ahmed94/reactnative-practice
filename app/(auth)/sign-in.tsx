import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '@/constants/colors'
import { images } from '@/constants'
import FormFeild from '@/components/FormFeild'

const SignIn = () => {
  const [ form, setForm ] = useState({
    email: '',
    password: '',
  })

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
          <FormFeild title='Email' value={form.email} handleTextChange={(e) => setForm({ ...form, email: e})} keyBoardType= 'email-address' />
          <FormFeild title='Password' value={form.password} handleTextChange={(e) => setForm({ ...form, password: e})} keyBoardType= 'password' />
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