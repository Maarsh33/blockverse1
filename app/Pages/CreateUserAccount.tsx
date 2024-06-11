import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { contract } from "@/constants/thirdweb";
import { useRouter } from "expo-router";
import { ThemedButton as Button } from "@/components/ThemedButton";
import { prepareContractCall, resolveMethod } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";

const CreateUserAccountPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [DOB, setDOB] = useState("");

  const { mutate: sendTransaction, isError } = useSendTransaction();

  const handleCreateAccount = async () => {
    //how to add details ? save them somewhere and save users
    const publicKey = "8";

    const transaction = await prepareContractCall({
      contract,
      method: resolveMethod("addUserIdentity"),
      params: [username, password, publicKey],
    });
    await sendTransaction(transaction);

    router.push("/Pages/SuccessCreateUserAccount");
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
          <ThemedText type="title">Sign-Up</ThemedText>
        </ThemedView>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your username / email"
            value={username}
            onChangeText={(e) => {
              console.log("args", e);
              setUsername(e);
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={(e) => setPassword(e)}
          />
        </View>

        <Button title="Create Account" onPress={handleCreateAccount} />
        {/* </View> */}
      </ParallaxScrollView>
    </KeyboardAvoidingView>
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

export default CreateUserAccountPage;
