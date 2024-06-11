import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedButton } from "@/components/ThemedButton";

const Welcome = ({}) => {
  const router = useRouter();
  const CreateUser = () => {
    router.push("/Pages/CreateUserAccount");
  };
  const HandleLoginUser = () => {
    router.push("/Pages/SelectPlatform");
  };
  const CreatePlatform = () => {
    router.push("/Pages/CreatePlatformAccount");
  };
  const HandleLoginPlatform = () => {
    router.push("/Pages/LoginPlatform");
  };

  return (
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
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <ThemedText type="title">Get Started!!</ThemedText>
      </ThemedView>
      <ThemedText type="subtitle">
        Empowering avatars, securing identities
      </ThemedText>
      <ThemedButton title="Create User Account" onPress={CreateUser} />
      <ThemedButton title="Create Platform Account" onPress={CreatePlatform} />
      <ThemedText type="subtitle">Already have an account ?</ThemedText>
      <View style={styles.buttonContainer}>
        <ThemedButton title="Login as User" onPress={HandleLoginUser} />
        <ThemedButton title="Login as Platform" onPress={HandleLoginPlatform} />
      </View>
      <ThemedButton
        title="Recover Your Identity"
        onPress={() => router.push("/Pages/Recover")}
      />
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // Adjust as needed
    marginTop: 10, // Add space if necessary
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

export default Welcome;
