import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import colors from '@/constants/colors'

interface customButtonProps {
  title: string;
  handlePress: () => void;
  isLoading?: boolean;
  otherStyles?: StyleProp<ViewStyle>
}

const CustomButton: React.FC<customButtonProps> = ({ title, handlePress, isLoading, otherStyles }) => {
  return (
    <View style= {styles.buttonViewStyle}>
      <TouchableOpacity onPress={handlePress} disabled={isLoading} style={[styles.customButtonStyle, otherStyles]}>
        <Text style={styles.buttonTextStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton

const styles = StyleSheet.create({
  buttonViewStyle: {
    height: 80,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  customButtonStyle: {
    backgroundColor: "orange",
    borderRadius: 10,
    justifyContent: "center",
    height: "70%",
    width: "100%",
  },

  buttonTextStyle: {
    textAlign: "center",
    color: `${colors.white}`,
    fontSize: 20,
  },
});