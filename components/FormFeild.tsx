import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import colors from '@/constants/colors';

//* Add proper props attributes to read input values
interface formFieldProps {
    title: string;
}

const FormFeild:React.FC<formFieldProps> = ({ title }) => {
  return (
    <View style={styles.viewStyle}>
        <Text style={{color: colors.white}}>{title}</Text>
    </View>
  )
}

export default FormFeild

const styles = StyleSheet.create({
  viewStyle: {
    height: 20,
    width: '100%',
    borderWidth: 1,
    borderColor: 'orange'
  }
});