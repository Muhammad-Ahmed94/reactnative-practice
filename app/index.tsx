import { Link, SplashScreen } from 'expo-router';
import { ActivityIndicator, Alert, Button, StatusBar, StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../constants/colors';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if(error) throw error
    if(fontsLoaded) SplashScreen.hideAsync();
    if(!fontsLoaded) return 

  }, [fontsLoaded, error]);

  if(!fontsLoaded && !error) return null;
  
  return (
    <SafeAreaView >
        <View>
          <Text style= {styles.mainStyle}>Hey there</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: `${colors.secondary}`,
    height: 100,
    color: `${colors.tertiary}`
  },
});
