import { Link, SplashScreen } from "expo-router";
import {
  ActivityIndicator,
  Alert,
  Button,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useFonts } from "expo-font";
import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "../constants/colors";

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
    // Prevent SplashScreen from hiding until fonts are loaded
    SplashScreen.preventAutoHideAsync();

    if (error) {
      Alert.alert("Error loading fonts");
      return;
    }

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    // Return a loading indicator until fonts are ready
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.mainStyle}>
        <View style={styles.viewStyle}>
          <Text>
            Welcome to Home Screen
          </Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: colors.primary,
    height: "100%", // Use flex: 1 for full height
  },
  
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  viewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 2,
  },
});
