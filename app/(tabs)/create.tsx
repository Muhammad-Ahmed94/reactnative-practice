import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import colors from '@/constants/colors';
import FormFeild from '@/components/FormFeild';

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
      </ScrollView>
    </SafeAreaView>
  );
}

export default Create

const styles = StyleSheet.create({})