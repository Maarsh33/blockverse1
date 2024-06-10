import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { ThemedButton } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ParallaxScrollView } from "@/components/ParallaxScrollView";
import { useColorScheme } from "react-native";
import Dropdown from "@/components/Dropdown";

const platforms = ["NED UET", "Habib University", "FAST UET"];

const SelectPlatformPage = ({}) => {
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter(); // Initialize router
  const colorScheme = useColorScheme();

  const handleSelect = (value: string) => {
    setSelectedPlatform(value);
    setModalVisible(false);
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
      <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>
          Select which metaverse platform you want to login to.
        </ThemedText>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: selectedPlatform
                  ? colorScheme === "light"
                    ? "#A1CEDC"
                    : "#1D3D47"
                  : "#ccc",
              },
            ]}
            onPress={() => setModalVisible(true)}
          >
            <ThemedText style={{ color: "#fff" }}>
              {selectedPlatform || "Select Platform"}
            </ThemedText>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <ThemedButton title="Log in to the platform" onPress={handleLogin} />
        </View>
      </ThemedView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ThemedView style={styles.modalView}>
            <ThemedText style={styles.modalTitle}>Select Platform</ThemedText>
            <FlatList
              data={platforms}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.platformItem}
                  onPress={() => handleSelect(item)}
                >
                  <ThemedText>{item}</ThemedText>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
            {/* <View
              style={[
                styles.buttonWrapper,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <ThemedButton
                title="Cancel"
                onPress={() => setModalVisible(false)}
                lightColor="#A1CEDC"
                darkColor="#1D3D47"
                variant="secondary"
              />
              <ThemedButton
                title="OK"
                onPress={() => {
                  handleSelect(selectedPlatform);
                  setModalVisible(false);
                }}
                lightColor="#A1CEDC"
                darkColor="#1D3D47"
              />
            </View> */}
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
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
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
  buttonWrapper: {
    width: "80%",
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
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  platformItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: "100%",
    alignItems: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80%",
  },
});

export default SelectPlatformPage;
