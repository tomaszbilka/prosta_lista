import { SafeAreaView } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useTheme } from "@react-navigation/native";

import type { ReactNode } from "react";

import { createStyles } from "./styles";

type TProps = {
  children: ReactNode;
};

const ScreenWrapper = ({ children }: TProps) => {
  const { colors, dark } = useTheme();

  const styles = createStyles(colors);

  return (
    <SafeAreaView style={styles.container}>
      {children}
      <ExpoStatusBar
        style={dark ? "light" : "dark"}
        backgroundColor={colors.background}
      />
    </SafeAreaView>
  );
};

export default ScreenWrapper;
