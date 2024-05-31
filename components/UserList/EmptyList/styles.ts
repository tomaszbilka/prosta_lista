import { StyleSheet } from "react-native";

import type { ExtendedTheme } from "@react-navigation/native";

import { spacing } from "components/styles/spacing";

export const createStyles = (colors: ExtendedTheme["colors"]) =>
  StyleSheet.create({
    empty: {
      marginTop: spacing.lg,
    },
    emptyText: {
      color: colors.text,
      fontSize: 20,
      textAlign: "center",
    },
  });
