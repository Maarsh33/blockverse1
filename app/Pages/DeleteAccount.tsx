import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Button from "@/components/Button";

const DeleteAccountPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleDeleteAccount = () => {
    // but how
    alert("Account deleted!");
    router.push("/login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username / email"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Delete Account" onPress={handleDeleteAccount} />
    </View>
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
});

export default DeleteAccountPage;
