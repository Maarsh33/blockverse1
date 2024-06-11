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
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ThemedButton } from "@/components/ThemedButton";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { useRouter } from "expo-router";

const platforms = ["NED UET", "Habib University", "FAST UET"];

const SelectPlatform = () => {
  const [platformModalVisible, setPlatformModalVisible] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const router = useRouter();

  const handleSelect = (item: string) => {
    setSelectedPlatform(item);
  };

  const handleLogin = () => {
    if (selectedPlatform) {
      router.push("/Pages/LoginUser");
    }
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
        <ThemedText type="title">
          Select which platform you want to logIn to
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.titleContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => setPlatformModalVisible(true)}
          >
            <ThemedText style={styles.boxText}>
              {selectedPlatform || "Select Platform"}
            </ThemedText>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <ThemedButton title="Log in to the platform" onPress={handleLogin} />
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
                  onPress={() => handleSelect(item)}
                >
                  <ThemedText style={styles.optionText}>
                    {selectedPlatform === item ? "✔ " : ""}
                    {item}
                  </ThemedText>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
            <View style={styles.modalButtons}>
              <Button
                title="Cancel"
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
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  buttonWrapper: {
    width: "90%",
    marginBottom: 10,
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
  box: {
    width: "100%",
    padding: 12,
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
});

export default SelectPlatform;
