import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import colors from '@/constants/colors';

//* Add proper props attributes to read input values
interface formFieldProps {
  title: string;
  value: string;
  handleTextChange: (text: string) => void;
  placeholder: string;
  keyBoardType?: string;
}

const FormFeild:React.FC<formFieldProps> = ({ title, value, handleTextChange, placeholder, keyBoardType }) => {
  const [ showPassword, setShowPassword ] = useState(false);  // Optional, can be used

  return (
    <View style= {styles.mainViewStyle}>
      <Text style={styles.textStyle}>{title}</Text>

      <View style={styles.inputViewStyle}>
        <TextInput value={value} onChangeText={handleTextChange} placeholder={placeholder} placeholderTextColor='gray' secureTextEntry={title === 'Password'} style={styles.textInput} />
      </View>
    </View>
  )
}

export default FormFeild

const styles = StyleSheet.create({
  mainViewStyle: {
    width: "100%",
    marginBottom: 10,
  },

  textStyle: {
    color: colors.white,
    marginBottom: 10,
    fontSize: 20,
  },

  inputViewStyle: {
    width: '100%',
    height: 75,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'black',
    justifyContent: 'center',
  },

  textInput: {
    color: colors.white,
    fontSize: 20
  }
});