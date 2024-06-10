import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedButton } from "@/components/ThemedButton";
import Dropdown from "@/components/Dropdown";

const GiveAccess = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedProfileDetails, setSelectedProfileDetails] =
    useState<string>("");
  const [selectedPermission, setSelectedPermission] = useState<string>("");

  const platforms = ["NED UET", "Habib University", "FAST UET"];
  const profileDetails = ["Email", "DOB", "Gender"];
  const permissions = ["Allow", "Deny"];

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatforms((prevSelected) => [...prevSelected, platform]);
  };

  return (
    <View style={styles.container}>
      <ThemedText type="subtitle">Control Permissions</ThemedText>

      <View style={styles.box}>
        <ThemedText>Select Metaverse Platform</ThemedText>
        <Dropdown items={platforms} onSelect={handlePlatformSelect} />
      </View>

      <View style={styles.box}>
        <ThemedText>Select Profile Details</ThemedText>
        <Dropdown items={profileDetails} onSelect={setSelectedProfileDetails} />
      </View>

      <View style={styles.box}>
        <ThemedText>Permission</ThemedText>
        <Dropdown items={permissions} onSelect={setSelectedPermission} />
      </View>

      <View style={styles.buttonContainer}>
        <ThemedButton title="Okay" onPress={() => {}} />
        <ThemedButton title="Close" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  box: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GiveAccess;
