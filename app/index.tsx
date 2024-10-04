import { Link, SplashScreen } from 'expo-router';
import { ActivityIndicator, Alert, Button, StatusBar, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

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

  const handlepress = () => {
    console.log('you pressed the button');
    Alert.alert(
      "important alert",
      "importatn alert sub heading",
      [
        {text: 'Cancel', onPress: () => console.log('cancel button pressed')},
        {text: 'OK', onPress: () => console.log('OK button was pressed')}
      ]
    )
  }

  useEffect(() => {
    if(error) throw error
    if(fontsLoaded) SplashScreen.hideAsync();
    if(!fontsLoaded) return 

  }, [fontsLoaded, error]);

  if(!fontsLoaded && !error) return null;
  
  return (
    <View style={styles.container}>
      <Text>
        hellow react nativve
      </Text>
      <Text style={{ color: "#000", textAlign: "center" }}>Hello muneeb </Text>
      <Link href="./home" style={{ color: "blue" }}>
        Go to Home page
      </Link>
      <ActivityIndicator size="large" style={{ backgroundColor: "#808080" }} />
      <Button title="click here" color="#f0f0f0" onPress={handlepress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})