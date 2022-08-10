import AppLoading from "expo-app-loading";
import React from "react";
import { ThemeProvider } from "styled-components";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

import { NavigationContainer } from "@react-navigation/native";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppRoutes } from "./src/app.routes";
import theme from "./src/global/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
