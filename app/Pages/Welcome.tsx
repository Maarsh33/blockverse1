import React, { useState } from "react";
import { Link } from "expo-router";
import { StyleSheet, Image } from "react-native";
//import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  loginContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

<ParallaxScrollView
  headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
  headerImage={
    <Image
      source={require("@/assets/images/title.png")}
      style={styles.reactLogo}
    />
  }
>
  <ThemedView style={styles.titleContainer}>
    <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
    <ThemedText type="title">Welcome To BlockVerse</ThemedText>
  </ThemedView>
</ParallaxScrollView>;

const Welcome = ({}) => {
  const CreateUser = () => {};
  const CreatePlatform = () => {};

  return (
    <ThemedView style={styles.container}>
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <ThemedText type="title">Welcome To BlockVerse</ThemedText>

      <Link href="/Pages/CreateUserAccount" asChild>
        <Button title="Create User Account" onPress={CreateUser} />
      </Link>
      <Link href="/Pages/CreatePlatformAccount" asChild>
        <Button title="Create Platform Account" onPress={CreatePlatform} />
      </Link>
      <ThemedView style={styles.loginContainer}>
        <ThemedText type="title">Already have an account ?</ThemedText>
        <Link href="/Pages/Userlogin" asChild>
          <Button title="Login as User" onPress={() => {}} />
        </Link>
        <Link href="/Pages/Platformlogin" asChild>
          <Button title="Login as Platform" onPress={() => {}} />
        </Link>
      </ThemedView>
    </ThemedView>
  );
};

export default Welcome;
