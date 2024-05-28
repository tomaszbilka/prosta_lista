import { SafeAreaView } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import type { ReactNode } from "react";

import { colors } from "components/styles/colors";

import { styles } from "./styles";

type TProps = {
  children: ReactNode;
};

const ScreenWrapper = ({ children }: TProps) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <ExpoStatusBar style="light" backgroundColor={colors.black} />
    </SafeAreaView>
  );
};

export default ScreenWrapper;
