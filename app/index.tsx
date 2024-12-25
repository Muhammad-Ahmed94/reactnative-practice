import { useFonts } from "expo-font";
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import colors from "../constants/colors";
import { useGlobalContext } from "../context/GlobalProvider";
import { Redirect, router, SplashScreen } from "expo-router";
import { useEffect } from "react";

export default function HomeScreen() {
  const { isLoading, isLoggedIn, user } = useGlobalContext();

  // Redirect if the user is logged in
  if (!isLoading && isLoggedIn) {
    console.log(user);
    return <Redirect href="/home" />;
  }

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
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    } else {
      SplashScreen.preventAutoHideAsync();
    }

    if (error) {
      Alert.alert("Error loading fonts");
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.mainStyle}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.viewStyle}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            style={styles.cards}
          />
          <View style={styles.textViewStyle}>
            <Text style={styles.mainText}>
              Discover endless Possibilities with{" "}
              <Text style={{ color: "orange" }}>Aora</Text>
            </Text>
          </View>
          <Text style={styles.subText}>
            Embark on a journey into limitless possibilities. Here creativity
            meets innovation.
          </Text>
          <CustomButton
            title="Continue with email"
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: colors.primary,
    height: "100%", // Or flex 1 for full height
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

  logo: {
    width: "30%",
    height: "10%",
  },

  cards: {
    height: "40%",
    width: "100%",
  },

  textViewStyle: {
    position: "relative",
    marginTop: 20,
  },

  mainText: {
    fontSize: 25,
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },

  subText: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    marginTop: 20,
  },
});
