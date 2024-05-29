import { Stack } from "expo-router";

import { colors } from "components/styles/colors";

export default function Layout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTintColor: colors.white,
        }}
      >
        {/* <Stack.Screen name="index" options={{ title: "Home" }} /> */}
        <Stack.Screen name="[missing]" options={{ title: "404" }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
