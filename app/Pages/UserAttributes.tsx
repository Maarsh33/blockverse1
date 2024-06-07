import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Button from "@/components/Button";
const UserAttributesPage = () => {
  const [attribute, setAttribute] = useState("");

  const handleSaveAttribute = () => {
    // again how the attributes will be saved
    alert("Attribute saved!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User Attributes</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter attribute"
        value={attribute}
        onChangeText={setAttribute}
      />
      <Button title="Save Attribute" onPress={handleSaveAttribute} />
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

export default UserAttributesPage;
