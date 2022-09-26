import AppLoading from "expo-app-loading";
import React from "react";
import { ThemeProvider } from "styled-components";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import theme from "./src/global/styles/theme";
import { AppRoutes } from "./src/routes/app.routes";
import { Signin } from "./src/screens/Signin";
import { AuthProvider, useAuth } from "./src/hooks/auth";
import { Routes } from "./src/routes";

export default function App() {
  const { userStorageLoading } = useAuth();

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="light-content" />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
