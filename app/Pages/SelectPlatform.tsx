import React, { useState } from "react";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
//import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook
import Dropdown from "@/components/Dropdown";
import Button from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

const platforms = ["Platform 1", "Platform 2", "Platform 3"];

const SelectPlatformPage = ({}) => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  //const navigation = useNavigation(); // Use useNavigation hook to access navigation object

  const handleSelect = (value: string) => {
    setSelectedPlatform(value);
  };

  const handleLogin = () => {
    if (selectedPlatform) {
      //  navigation.navigate("CreateAccount");
      // Navigate to 'Pages/CreateAccount' screen
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>
        Select which metaverse platform you want to login to.
      </ThemedText>
      <Dropdown items={platforms} onSelect={handleSelect} />
      <Link href="/Pages/CreateAccount" asChild>
        <Button
          title="Log in to the platform"
          onPress={handleLogin}
          disabled={!selectedPlatform}
        />
      </Link>
    </ThemedView>
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
});

export default SelectPlatformPage;
