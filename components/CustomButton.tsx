import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '@/constants/colors'
import { coolDownAsync } from 'expo-web-browser'

const CustomButton = () => {
  return (
    <View style= {styles.buttonViewStyle}>
      <TouchableOpacity style={styles.customButtonStyle}>
        <Text style={styles.buttonTextStyle}>CustomButton</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton

const styles = StyleSheet.create({
  buttonViewStyle: {
    height: "10%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  customButtonStyle: {
    backgroundColor: "orange",
    paddingVertical: 2,
    paddingHorizontal: 5,
    color: "black",
    borderRadius: 10,
    justifyContent: "center",
    height: "70%",
    width: "100%",
  },

  buttonTextStyle: {
    textAlign: "center",
    color: `${colors.white}`,
    fontSize: 25,
  },
});