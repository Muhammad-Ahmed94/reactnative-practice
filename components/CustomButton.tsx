import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '@/constants/colors'
import { isLoading } from 'expo-font';

interface customButtonProps {
  title: string;
  handlePress: () => void;
  isLoading?: boolean;
}

const CustomButton: React.FC<customButtonProps> = ({ title, handlePress, isLoading }) => {
  return (
    <View style= {styles.buttonViewStyle}>
      <TouchableOpacity onPress={handlePress} disabled={isLoading} style={styles.customButtonStyle}>
        <Text style={styles.buttonTextStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomButton

const styles = StyleSheet.create({
  buttonViewStyle: {
    height: "10%",
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