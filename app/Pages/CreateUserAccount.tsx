import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { contract } from "@/constants/thirdweb";
import { useRouter } from "expo-router";
import Button from "@/components/Button";
import { prepareContractCall, resolveMethod } from "thirdweb";
import { useSendTransaction } from "thirdweb/react";

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
});

const CreateAccountPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [DOB, setDOB] = useState("");

  const { mutate: sendTransaction, isError } = useSendTransaction();

  const handleCreateAccount = async () => {
    //how to add details ? save them somewhere and save users
    const publicKey = "986";

    const transaction = await prepareContractCall({
      contract,
      method: resolveMethod("addUserIdentity"),
      params: [username, password, publicKey],
    });
    await sendTransaction(transaction);

    alert("Account created!");
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username / email"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Enter your Date Of Birth"
        secureTextEntry
        value={DOB}
        onChangeText={setDOB}
      /> */}
      <Button title="Create Account" onPress={handleCreateAccount} />
    </View>
  );
};

export default CreateAccountPage;
