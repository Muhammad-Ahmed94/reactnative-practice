import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.customButton}>
      <Text>CustomButton</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    customButton: {
        backgroundColor: 'orange',
        paddingVertical: 2,
        paddingHorizontal: 5,
        color: 'black',
        borderRadius: 10,
        
    }
})