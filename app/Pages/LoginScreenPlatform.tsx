import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedButton } from "@/components/ThemedButton";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome for checkmark icon

const LoginScreenPlatform = ({}) => {
  const router = useRouter();
  //  should connect to oculas
  const HandleViewUsers = () => {
    router.push("/Pages/ViewUsers");
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
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">
            LogIn Successfull{" "}
            <FontAwesome name="check-circle" size={24} color="green" />
          </ThemedText>
        </ThemedView>

        <ThemedText type="title">Lets Start!!</ThemedText>
        <ThemedText type="subtitle">
          Empowering avatars, securing identities
        </ThemedText>
      </ThemedView>

      <ThemedButton title="View Registered Users" onPress={HandleViewUsers} />

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

export default LoginScreenPlatform;
