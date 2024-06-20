// import { ethers } from "ethers";
// import { connectToDatabase } from "@/scripts/db";
// import { prepareContractCall, sendTransaction, resolveMethod } from "thirdweb";
// import { contract } from "@/constants/thirdweb";
// import SMTPMailer from "react-native-smtp-mailer";
// import { View } from "react-native";
// import { ThemedButton as Button } from "@/components/ThemedButton";

// async function savePublicKeyToDatabase(userId: string, publicKey: string) {
//   const db = await connectToDatabase();
//   await db.collection("publicKeys").insertOne({ userId, publicKey });
//   console.log("Public key saved to database for user:", userId);
// }

// async function sendPublicKeyViaEmail(email: string, publicKey: string) {
//   try {
//     await SMTPMailer.sendMail({
//       mailhost: "smtp.gmail.com",
//       port: "587",
//       ssl: true,
//       username: "myrasheikh.33@gmail.com" || "",
//       password: "Dummy.com1" || "",
//       recipients: email,
//       subject: "Your Public Key",
//       htmlBody: `Here is your generated public key: ${publicKey}`,
//     });
//     console.log("Email sent successfully.");
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// }

// export async function generateAndSendPublicKey(
//   userId: string,
//   email: string,
//   account: string
// ) {
//   const wallet = ethers.Wallet.createRandom();
//   const publicKey = wallet.publicKey;

//   console.log("Generated Public Key:", publicKey);

//   await savePublicKeyToDatabase(userId, publicKey);
//   await sendPublicKeyViaEmail(email, publicKey);

//   const transaction = await prepareContractCall({
//     contract,
//     method: resolveMethod("setPublicKey"),
//     params: [publicKey],
//   });

//   const { transactionHash } = await sendTransaction({
//     transaction,
//     account,
//   });

//   console.log("Transaction Hash:", transactionHash);
// }

// const GeneratePublicKey = () => {
//   const handleGeneratePublicKey = async () => {
//     const userId = "Maryam33";
//     const email = "myrasheikh.33@gmail.com";
//     const account = "0xF03D9e90Ba5c429CdC83f011F37BC7005202F2C0";

//     await generateAndSendPublicKey(userId, email, account);
//     console.log(
//       "Public key generation, storage, email, and transaction process completed."
//     );
//   };

//   return (
//     <View>
//       <Button title="Generate Public Key" onPress={handleGeneratePublicKey} />
//     </View>
//   );
// };

// export default GeneratePublicKey;
