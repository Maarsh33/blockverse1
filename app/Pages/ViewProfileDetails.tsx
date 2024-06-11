import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Modal,
  Text,
  Pressable,
} from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedButton as Button } from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { useProfileDetails } from "@/context/ProfileDetailsContext"; // Import the context

const ViewProfileDetails = ({}) => {
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const { profileDetails } = useProfileDetails(); // Use the context

  const handleShowDetails = () => {
    if (profileDetails?.email === email) {
      setModalVisible(true);
    } else {
      alert("No details found for this email.");
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">View Profile Details</ThemedText>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Button title="Show Details" onPress={handleShowDetails} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalView}>
          {profileDetails ? (
            <>
              <ThemedText>Email: {profileDetails.email}</ThemedText>
              <ThemedText>Attribute Key: {profileDetails.key}</ThemedText>
              <ThemedText>Attribute Value: {profileDetails.value}</ThemedText>
              <ThemedText>Timestamp: {profileDetails.timestamp}</ThemedText>
              <ThemedText>Date of Birth: {profileDetails.DOB}</ThemedText>
              <ThemedText>Gender: {profileDetails.gender}</ThemedText>
            </>
          ) : (
            <ThemedText>No details found for this email.</ThemedText>
          )}
          <Pressable style={styles.button} onPress={handleCloseModal}>
            <Text style={styles.buttonText}>Close</Text>
          </Pressable>
        </View>
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
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
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#2196F3",
  },
  buttonText: {
    color: "white",
  },
});

export default ViewProfileDetails;
