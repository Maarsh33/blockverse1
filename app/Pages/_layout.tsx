// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { useFonts } from "expo-font";

// import { useEffect } from "react";
// import "react-native-reanimated";
// import { ThirdwebProvider } from "thirdweb/react";

// import { useColorScheme } from "@/hooks/useColorScheme";

// import React from "react";
// import { ProfileDetailsProvider } from "@/context/ProfileDetailsContext";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import AddProfileDetails from "@/app/Pages/AddProfileDetails";
// import ViewProfileDetailsScreen from "@/app/Pages/ViewProfileDetails";

// // Import all necessary components
// import CreateUserAccountScreen from "@/app/Pages/CreateUserAccount";
// import DeletePlatformAccountScreen from "@/app/Pages/DeletePlatformAccount";
// import DeleteUserAccountScreen from "@/app/Pages/DeleteUserAccount";
// import GetStartedScreen from "@/app/Pages/GetStarted";
// import LoginPlatformScreen from "@/app/Pages/LoginPlatform";
// import LoginScreenPlatformScreen from "@/app/Pages/LoginScreenPlatform";
// import LoginScreenUserScreen from "@/app/Pages/LoginScreenUser";
// import LoginUserScreen from "@/app/Pages/LoginUser";
// import RecoverScreen from "@/app/Pages/Recover";
// import SelectPlatformScreen from "@/app/Pages/SelectPlatform";
// import SuccessCreatePlatformAccountScreen from "@/app/Pages/SuccessCreatePlatformAccount";
// import SuccessCreateUserAccountScreen from "@/app/Pages/SuccessCreateUserAccount";
// import SuccessDeletePlatformAccountScreen from "@/app/Pages/SuccessDeletePlatformAccount";
// import SuccessDeleteUserAccountScreen from "@/app/Pages/SuccessDeleteUserAccount";
// import SuccessGiveAccessScreen from "@/app/Pages/SuccessGiveAccess";
// import SuccessRecoverScreen from "@/app/Pages/SuccessRecover";
// import UserAttributesScreen from "@/app/Pages/UserAttributes";
// import WelcomeScreen from "@/app/Pages/Welcome";

// const Stack = createStackNavigator(); // Renamed to avoid conflict

// const PagesLayout = () => {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("@/assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   if (!loaded) {
//     return null; // Ensure fonts are loaded before rendering
//   }

//   return (
//     <ThirdwebProvider>
//       <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//         <ProfileDetailsProvider>
//           <Stack.Navigator>
//             <Stack.Screen
//               name="Create Platform Account"
//               options={{ headerShown: true }}
//             >
//               {() => null}
//             </Stack.Screen>
//             <Stack.Screen
//               name="Create User Account"
//               component={CreateUserAccountScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="Delete Platform Account"
//               component={DeletePlatformAccountScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="Delete User Account"
//               component={DeleteUserAccountScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="Get Started"
//               component={GetStartedScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="Login Platform"
//               component={LoginPlatformScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="Login-Screen Platform"
//               component={LoginScreenPlatformScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="Login-Screen User"
//               component={LoginScreenUserScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="User Login"
//               component={LoginUserScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="Recover"
//               component={RecoverScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="Select Platform"
//               component={SelectPlatformScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="SuccessCreatePlatformAccount"
//               component={SuccessCreatePlatformAccountScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="SuccessCreateUserAccount"
//               component={SuccessCreateUserAccountScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="SuccessDeletePlatformAccount"
//               component={SuccessDeletePlatformAccountScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="SuccessDeleteUserAccount"
//               component={SuccessDeleteUserAccountScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="SuccessGiveAccess"
//               component={SuccessGiveAccessScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="SuccessRecover"
//               component={SuccessRecoverScreen}
//               options={{ headerShown: false }}
//             />
//             <Stack.Screen
//               name="Add User Attributes"
//               component={UserAttributesScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="View Profile Details"
//               component={ViewProfileDetailsScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="Welcome"
//               component={WelcomeScreen}
//               options={{ headerShown: true }}
//             />
//             <Stack.Screen
//               name="Add Profile Details"
//               component={AddProfileDetails}
//               options={{ headerShown: true }}
//             />
//           </Stack.Navigator>
//         </ProfileDetailsProvider>
//       </ThemeProvider>
//     </ThirdwebProvider>
//   );
// };

// export default PagesLayout;
