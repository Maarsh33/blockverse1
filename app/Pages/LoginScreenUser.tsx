import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedButton } from "@/components/ThemedButton";

const LoginScreenUser = ({}) => {
  const router = useRouter();
  //  should connect to oculas
  const HandleMetaverse = () => {};
  const HandleAddProfile = () => {
    router.push("/Pages/AddProfileDetails");
  };
  const HandleViewProfile = () => {
    router.push("/Pages/AddProfileDetails");
  };
  const HandleGiveAccess = () => {
    router.push("/Pages/GiveAccess");
  };
  const HandleLogOut = () => {
    router.push("/Pages/Welcome");
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
        <ThemedText type="title">Lets Start!!</ThemedText>
        <ThemedText type="subtitle">
          Empowering avatars, securing identities
        </ThemedText>
      </ThemedView>

      <ThemedButton title="Enter Metaverse" onPress={HandleMetaverse} />
      <ThemedButton
        title="Add/View Profile Details"
        onPress={HandleAddProfile}
      />
      <ThemedButton title="Give Access" onPress={HandleGiveAccess} />
      <ThemedButton title="LogOut" onPress={HandleLogOut} />
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

export default LoginScreenUser;
