import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { useLocation } from "react-router-dom"; // Update import
import { useRouter } from "expo-router";
import { ThemedButton as Button } from "@/components/ThemedButton";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { FontAwesome } from "@expo/vector-icons"; // Import FontAwesome for checkmark icon

const SuccessGiveAccess = () => {
  //   const location = useLocation();
  //   const searchParams = new URLSearchParams(location.search);
  //   const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  //   const [selectedProfileDetails, setSelectedProfileDetails] = useState<
  //     string[]
  //   >([]);
  //   const [permission, setPermission] = useState<string | null>("");

  //   useEffect(() => {
  //     const platforms = searchParams.get("selectedPlatforms")?.split(",") || [];
  //     const profileDetails =
  //       searchParams.get("selectedProfileDetails")?.split(",") || [];
  //     const permissionValue = searchParams.get("permission") || "";

  //     setSelectedPlatforms(platforms);
  //     setSelectedProfileDetails(profileDetails);
  //     setPermission(permissionValue);
  //   }, []);

  const router = useRouter();

  const handleHome = () => {
    router.push("/Pages/Welcome");
  };

  const handleMeta = () => {
    router.push("/Pages/EnterMetaverse");
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
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">
          Success <FontAwesome name="check-circle" size={24} color="green" />
        </ThemedText>
        <ThemedText type="subtitle">Access Has been Granted</ThemedText>
      </ThemedView>

      {/* <ThemedView style={styles.choicesContainer}>
        <ThemedText type="subtitle">
          Platform: {selectedPlatforms.join(", ")}
        </ThemedText>
        <ThemedText type="subtitle">
          Profile Details: {selectedProfileDetails.join(", ")}
        </ThemedText>
        <ThemedText type="subtitle">Permission: {permission}</ThemedText>
      </ThemedView> */}

      <Button title="Home" onPress={handleHome} />
      <Button title="Enter Metaverse" onPress={handleMeta} />
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
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
  choicesContainer: {
    marginVertical: 20,
  },
});

export default SuccessGiveAccess;
