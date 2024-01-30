import { SafeAreaView } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import type { ReactNode } from "react";

import { styles } from "./styles";

type TProps = {
  children: ReactNode;
};

const ScreenWrapper = ({ children }: TProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <ExpoStatusBar style="light" />
    </SafeAreaView>
  );
};

export default ScreenWrapper;
