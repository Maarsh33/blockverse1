import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import Button from "@/components/Button";

const CreatePlatformAccountScreen = ({}) => {
  const [platformName, setPlatformName] = useState("");
  const [association, setAssociation] = useState("");

  const handleAccountCreation = () => {};

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Platform Name"
        value={platformName}
        onChangeText={setPlatformName}
      />
      <TextInput
        style={styles.input}
        placeholder="association"
        value={association}
        onChangeText={setAssociation}
      />
      <Button title="Create Account" onPress={handleAccountCreation} />
    </View>
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
});

export default CreatePlatformAccountScreen;
