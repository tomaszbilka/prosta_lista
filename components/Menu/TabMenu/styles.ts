import { StyleSheet, StatusBar } from "react-native";

import type { ExtendedTheme } from "@react-navigation/native";

import { spacing } from "components/styles/spacing";

const topPadding = (StatusBar?.currentHeight || 30) + spacing.xs;

export const createStyles = (colors: ExtendedTheme["colors"]) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: spacing.base,
      paddingTop: topPadding,
    },
    item: {
      backgroundColor: colors.success,
      borderColor: colors.success,
      borderRadius: 30,
      borderWidth: 1,
      height: 60,
      marginHorizontal: spacing.sm,
      padding: spacing.sm,
      width: 60,
      zIndex: 1,
    },
    notFocused: {
      borderColor: colors.border,
      backgroundColor: colors.background,
    },
  });
