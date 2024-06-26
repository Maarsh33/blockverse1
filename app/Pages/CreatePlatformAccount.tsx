import React, { useState } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { ThemedButton as Button } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";

const CreatePlatformAccountScreen = ({}) => {
  const router = useRouter();
  const [platformName, setPlatformName] = useState("");
  const [platformNumber, setPlatformNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [key, setKey] = useState("");

  const handleCreatePlatform = () => {
    router.push("/Pages/SuccessCreatePlatformAccount");
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
        <ThemedText type="title">Create Account</ThemedText>
      </ThemedView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Platform Name"
          value={platformName}
          onChangeText={setPlatformName}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Platform Number"
          value={platformNumber}
          onChangeText={setPlatformNumber}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Secret Key"
          value={key}
          onChangeText={setKey}
        />
      </View>
      <Button title="Create Account" onPress={handleCreatePlatform} />
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff", // Update with your desired background color
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
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default CreatePlatformAccountScreen;
