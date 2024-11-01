import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@/constants/colors";
import { images } from "@/constants";
import FormFeild from "@/components/FormFeild";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";
import { createUser } from "@/lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if(!form.email || !form.password || !form.username) {
      Alert.alert("Error", "Please fill in all the fields!");
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username)
      return result;
      
    } catch (error) {
      console.log(error);
      Alert.alert("Error", (error as any).message)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SafeAreaView style={styles.mainStyle}>
        <ScrollView contentContainerStyle={{ height: "100%" }}>
          <View style={styles.viewStyle}>
            <Image
              source={images.logo}
              resizeMode="contain"
              style={styles.logo}
            />
            <Text style={styles.text}>Sign Up Here!</Text>

            <View>
              <FormFeild
                title="Username"
                value={form.username}
                handleTextChange={(e) => setForm({ ...form, username: e })}
                placeholder="Your_Name"
              />
              <FormFeild
                title="Email"
                value={form.email}
                handleTextChange={(e) => setForm({ ...form, email: e })}
                placeholder="E-mail"
                keyBoardType="email-address"
              />
              <FormFeild
                title="Password"
                value={form.password}
                handleTextChange={(e) => setForm({ ...form, password: e })}
                placeholder="Password"
                keyBoardType="password"
              />
            </View>

            <View style={styles.signInButtonViewStyle}>
              <CustomButton
                title="Sign Up to Aora"
                handlePress={submit}
                isLoading={isSubmitting}
                otherStyles={{ height: 60 }}
              />
            </View>

            <View style={styles.signUpViewStyle}>
              <Text style={{ color: colors.white }}>
                Already have an account?{" "}
                <Link href="/sign-in" style={{ color: "orange" }}>
                  Log in here
                </Link>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainStyle: {
    backgroundColor: colors.primary,
    height: "100%",
  },

  viewStyle: {
    width: "100%",
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  logo: {
    width: "40%",
    height: "10%",
  },

  text: {
    color: colors.white,
    marginVertical: 10,
    fontSize: 25,
    fontWeight: "bold",
  },

  signInButtonViewStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },

  signUpViewStyle: {
    alignItems: "center",
    paddingTop: 10,
  },
});
