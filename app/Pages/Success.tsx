import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { ThemedButton as Button } from "@/components/ThemedButton";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome for checkmark icon

const Success = () => {
  const router = useRouter();

  const handleLoginPress = () => {
    router.push("/LoginUser");
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
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Success <FontAwesome name="check-circle" size={24} color="green" />
        </ThemedText>
        <ThemedText type="subtitle">
          Your Account has been created Successfully
        </ThemedText>
      </ThemedView>

      <Button title="Login" onPress={handleLoginPress} />
      {/* </View> */}
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
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
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Success;
