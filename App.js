import { NavigationContainer } from "@react-navigation/native";
import { setTestDeviceIDAsync } from "expo-ads-admob";
import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import Navigator from "./navigator";

export default function App() {
  const [ready, setReady] = useState(false);
  const startLoading = async () => {
    await setTestDeviceIDAsync("EMULATOR");
  };

  const onFinish = () => setReady(true);

  if (!ready) {
    return (
      <AppLoading
        onError={console.error}
        startAsync={startLoading}
        onFinish={onFinish}
      />
    );
  }
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}
