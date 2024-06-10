// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";
// import { Stack } from "expo-router";

// import { useEffect } from "react";
// import "react-native-reanimated";
// import { ThirdwebProvider } from "thirdweb/react";

// import { useColorScheme } from "@/hooks/useColorScheme";

// export default function PagesLayout() {
//   const colorScheme = useColorScheme();
//   //   const [loaded] = useFonts({
//   //
//   //   });

//   //   useEffect(() => {
//   //     if (loaded) {
//   //       SplashScreen.hideAsync();
//   //     }
//   //   }, [loaded]);

//   //   if (!loaded) {
//   //     return null;
//   //   }

//   return (
//     <ThirdwebProvider>
//       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//         <Stack>
//           <Stack.Screen name="GetStarted" options={{ headerShown: false }} />
//           <Stack.Screen name="Welcome" options={{ headerShown: false }} />
//           <Stack.Screen
//             name="CreateUserAccount"
//             options={{ headerShown: false }}
//           />
//           <Stack.Screen
//             name="CreatePlatformAccount"
//             options={{ headerShown: false }}
//           />
//         </Stack>
//       </ThemeProvider>
//     </ThirdwebProvider>
//   );
// }
