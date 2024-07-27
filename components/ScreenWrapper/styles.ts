import { StyleSheet } from "react-native";

import type { Theme } from "@react-navigation/native";

export const createStyles = (colors: Theme["colors"]) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
  });
