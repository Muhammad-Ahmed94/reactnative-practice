import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebaseConfig";
import { Alert } from "react-native";

export const googleSignIn = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    Alert.alert("hey there", `${auth.currentUser} you are signed in`);
  } catch (error) {
    console.error(error);
  }
};
