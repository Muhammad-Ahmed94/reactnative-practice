import { signInWithPopup } from "firebase/auth";
import { log, googleProvider } from "./firebaseConfig";
import { Alert } from "react-native";

export const googleSignIn = async () => {
  try {
    await signInWithPopup(log, googleProvider);
    Alert.alert("hey there", "hello signed user");
  } catch (error) {
    console.error(error);
  }
};
