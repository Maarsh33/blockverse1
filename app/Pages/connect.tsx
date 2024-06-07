import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";

const ConnectPage = () => {
  const router = useRouter();
  const { method } = useLocalSearchParams();

  useEffect(() => {
    // HOW TO AUTHENTICATE?
    setTimeout(() => {
      router.push("/select-platform");
    }, 2000);
  }, [method]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Connecting via {method === "email" ? "Email" : "Metamask"}...
      </Text>
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
  },
});

export default ConnectPage;
