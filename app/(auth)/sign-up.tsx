import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import colors from "@/constants/colors";
import { images } from "@/constants";
import FormFeild from "@/components/FormFeild";
import CustomButton from "@/components/CustomButton";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log("singinig you in");
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
