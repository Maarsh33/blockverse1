import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";
import { contract } from "@/constants/thirdweb";
import { prepareContractCall, resolveMethod } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";

const Recover = () => {
  const [username, setUsername] = useState("");
  const [publicKey, setPublicKey] = useState(""); // Fixed typo here
  const [fingerprint, setFingerprint] = useState(""); // Changed variable name to lowercase
  const router = useRouter();
  const { mutate: sendTransaction, isError } = useSendTransaction();

  const handleRecover = async () => {
    const transaction = await prepareContractCall({
      contract,
      method: resolveMethod("recoverUserIdentity"),
      params: [username, publicKey, fingerprint],
    });
    await sendTransaction(transaction);
    router.push("/Pages/SuccessRecover"); // Moved inside handleRecover function
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding" // Set the behavior to "padding"
    >
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={
          <Image
            source={require("@/assets/images/title.png")}
            style={styles.reactLogo}
          />
        }
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.logo}
        />
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Recover Account</ThemedText>
        </ThemedView>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { color: "white" }]}
            placeholder="User Name"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { color: "white" }]}
            placeholder="Public Key"
            value={publicKey}
            onChangeText={setPublicKey}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { color: "white" }]}
            placeholder="Fingerprint"
            value={fingerprint}
            onChangeText={setFingerprint}
          />
        </View>
        <ThemedButton title="Recover Account" onPress={handleRecover} />
      </ParallaxScrollView>
    </KeyboardAvoidingView>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Recover;
