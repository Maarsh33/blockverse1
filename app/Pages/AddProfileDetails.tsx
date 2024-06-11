import React, { useState } from "react";
import { View, StyleSheet, TextInput, Image } from "react-native";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { ThemedButton as Button } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { useProfileDetails } from "@/context/ProfileDetailsContext"; // Import the context

const AddProfileDetails = ({}) => {
  const router = useRouter();
  const { setProfileDetails } = useProfileDetails(); // Use the context
  const [email, setEmail] = useState("");
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [DOB, setDOB] = useState("");
  const [gender, setGender] = useState("");

  const handleLogin = () => {
    setProfileDetails({ email, key, value, timestamp, DOB, gender });
    router.push("/Pages/SelectPlatform");
  };
  const handleLogOut = () => {
    router.push("/Pages/Welcome");
  };
  const handleView = () => {
    router.push("/Pages/ViewProfileDetails");
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
        <ThemedText type="title">Add Profile Details</ThemedText>
      </ThemedView>
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
          placeholder="Attribute Key"
          value={key}
          onChangeText={setKey}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Attribute Value"
          value={value}
          onChangeText={setValue}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Timestamp"
          value={timestamp}
          onChangeText={setTimestamp}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Date Of Birth"
          value={DOB}
          onChangeText={setDOB}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Your Gender"
          value={gender}
          onChangeText={setGender}
        />
      </View>
      <Button title="View Profile Details" onPress={handleView} />
      <View style={styles.buttonContainer}>
        <Button title="LogIn" onPress={handleLogin} />
        <Button title="LogOut" onPress={handleLogOut} />
      </View>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
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

export default AddProfileDetails;
