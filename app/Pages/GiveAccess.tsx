import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
  Button,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { ThemedButton } from "@/components/ThemedButton";

const platforms = ["NED UET", "Habib University", "FAST UET"];
const profileDetails = ["Email", "DOB", "Gender"];

const GiveAccess = () => {
  const [platformModalVisible, setPlatformModalVisible] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [selectedProfileDetails, setSelectedProfileDetails] = useState<
    string[]
  >([]);
  const [permissionModalVisible, setPermissionModalVisible] = useState(false);
  const [permission, setPermission] = useState<string | null>(null);
  const router = useRouter();
  //const { state } = router;

  const toggleSelection = (
    item: string,
    selectedItems: string[],
    setSelectedItems: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSelect = (
    item: string,
    setSelected: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    setSelected(item);
  };

  const HandleAccess = () => {
    const selectedPlatformsQuery = encodeURIComponent(
      selectedPlatforms.join(",")
    );
    const selectedProfileDetailsQuery = encodeURIComponent(
      selectedProfileDetails.join(",")
    );
    const permissionQuery = encodeURIComponent(permission || "");

    router.push(
      `/Pages/SuccessGiveAccess?platforms=${selectedPlatformsQuery}&profileDetails=${selectedProfileDetailsQuery}&permission=${permissionQuery}`
    );
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
        <ThemedText type="title">Control Permissions</ThemedText>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => setPlatformModalVisible(true)}
          >
            <ThemedText style={styles.boxText}>
              Select Metaverse Platform
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => setProfileModalVisible(true)}
          >
            <ThemedText style={styles.boxText}>
              Select Profile Details
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.box}
            onPress={() => setPermissionModalVisible(true)}
          >
            <ThemedText style={styles.boxText}>Permission</ThemedText>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <ThemedButton title="Give Access" onPress={HandleAccess} />
        </View>
      </ThemedView>

      {/* Platform Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={platformModalVisible}
        onRequestClose={() => setPlatformModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ThemedView style={styles.modalView}>
            <ThemedText style={styles.modalTitle}>Select Platform</ThemedText>
            <FlatList
              data={platforms}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() =>
                    toggleSelection(
                      item,
                      selectedPlatforms,
                      setSelectedPlatforms
                    )
                  }
                >
                  <ThemedText style={styles.optionText}>
                    {selectedPlatforms.includes(item) ? "✔ " : ""}
                    {item}
                  </ThemedText>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
            <View style={styles.modalButtons}>
              <Button
                title="Close"
                onPress={() => setPlatformModalVisible(false)}
              />
              <Button
                title="OK"
                onPress={() => setPlatformModalVisible(false)}
              />
            </View>
          </ThemedView>
        </View>
      </Modal>

      {/* Profile Details Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={profileModalVisible}
        onRequestClose={() => setProfileModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ThemedView style={styles.modalView}>
            <ThemedText style={styles.modalTitle}>
              Select Profile Details
            </ThemedText>
            <FlatList
              data={profileDetails}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() =>
                    toggleSelection(
                      item,
                      selectedProfileDetails,
                      setSelectedProfileDetails
                    )
                  }
                >
                  <ThemedText style={styles.optionText}>
                    {selectedProfileDetails.includes(item) ? "✔ " : ""}
                    {item}
                  </ThemedText>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
            <View style={styles.modalButtons}>
              <Button
                title="Close"
                onPress={() => setProfileModalVisible(false)}
              />
              <Button
                title="OK"
                onPress={() => setProfileModalVisible(false)}
              />
            </View>
          </ThemedView>
        </View>
      </Modal>

      {/* Permission Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={permissionModalVisible}
        onRequestClose={() => setPermissionModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ThemedView style={styles.modalView}>
            <ThemedText style={styles.modalTitle}>Permission</ThemedText>
            <FlatList
              data={["Allow", "Deny"]}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item, setPermission)}
                >
                  <ThemedText style={styles.optionText}>
                    {permission === item ? "✔ " : ""}
                    {item}
                  </ThemedText>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
            <View style={styles.modalButtons}>
              <Button
                title="Close"
                onPress={() => setPermissionModalVisible(false)}
              />
              <Button
                title="OK"
                onPress={() => setPermissionModalVisible(false)}
              />
            </View>
          </ThemedView>
        </View>
      </Modal>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  box: {
    width: "100%",
    paddingVertical: 12, // Adjusted padding
    paddingHorizontal: 16, // Adjusted padding
    marginVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
    flex: 1,
  },
  boxText: {
    color: "#000",
    fontWeight: "600",
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  buttonWrapper: {
    width: "90%",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "80%",
    backgroundColor: "black",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "white",
  },
  option: {
    padding: 10,
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  optionText: {
    color: "white",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});

export default GiveAccess;
