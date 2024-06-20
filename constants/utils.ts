// import { generateKeyPair as generateRSAKeyPair } from "react-native-crypto";
// import { API_URL, SENDGRID_API_KEY, EMAIL_USER } from "@env"; // Ensure your .env variables are configured properly

// // Function to generate a key pair
// export const generateKeyPair = async () => {
//   return new Promise<{ publicKey: string; privateKey: string }>(
//     (resolve, reject) => {
//       generateRSAKeyPair(
//         {
//           modulusLength: 2048,
//           publicKeyEncoding: {
//             type: "spki",
//             format: "pem",
//           },
//           privateKeyEncoding: {
//             type: "pkcs8",
//             format: "pem",
//           },
//         },
//         (err, publicKey, privateKey) => {
//           if (err) {
//             reject(err);
//           } else {
//             resolve({ publicKey, privateKey });
//           }
//         }
//       );
//     }
//   );
// };

// // Function to send an email using SendGrid
// export const sendEmail = async (email: string, publicKey: string) => {
//   const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${SENDGRID_API_KEY}`,
//     },
//     body: JSON.stringify({
//       personalizations: [
//         {
//           to: [{ email }],
//           subject: "Your Public Key",
//         },
//       ],
//       from: { email: EMAIL_USER },
//       content: [
//         {
//           type: "text/plain",
//           value: `Here is your generated public key: ${publicKey}`,
//         },
//       ],
//     }),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to send email");
//   }
// };
