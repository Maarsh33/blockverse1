// // GeneratePublicKey.tsx
// import React from "react";
// import { View, StyleSheet, Image } from "react-native";
// import { useRouter } from "expo-router";
// import { ThemedButton as Button } from "@/components/ThemedButton";
// import { ParallaxScrollView } from "@/components/ParallaxScrollView";
// import { generateAndSendPublicKey } from "@/scripts/PK"; // Import generateAndSendPublicKey function

// const GeneratePublicKey = () => {
//   const router = useRouter();

//   const handleGeneratePublicKey = async () => {
//     const userId = "Maryam33"; // Example user ID
//     const email = "myrasheikh.33@gmail.com"; // Example user email
//     const account = "0xF03D9e90Ba5c429CdC83f011F37BC7005202F2C0"; // Replace with your account address
//     await generateAndSendPublicKey(userId, email, account);
//     console.log("Public key generation and sending successful.");
//   };

//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
//       headerImage={
//         <Image
//           source={require("@/assets/images/title.png")}
//           style={styles.reactLogo}
//         />
//       }
//     >
//       <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
//       <View style={styles.titleContainer}></View>

//       <View style={styles.buttonContainer}>
//         <Button title="Generate Public Key" onPress={handleGeneratePublicKey} />
//       </View>
//     </ParallaxScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//     alignSelf: "center",
//   },
//   reactLogo: {
//     height: "100%",
//     width: "100%",
//     bottom: 0,
//     left: 0,
//     position: "absolute",
//   },
//   titleContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//     gap: 8,
//   },
//   buttonContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default GeneratePublicKey;
