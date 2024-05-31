import { Dimensions, StyleSheet } from "react-native";

import type { ExtendedTheme } from "@react-navigation/native";

import { spacing } from "components/styles/spacing";

const windowWidth = Dimensions.get("window").width;

export const createStyles = (colors: ExtendedTheme["colors"]) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      borderColor: colors.border,
      borderRadius: spacing.base,
      borderWidth: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: spacing.xxs,
      marginVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xxs,
    },
    editBorder: {
      borderStyle: "dashed",
    },
    text: {
      color: colors.text,
      fontSize: 20,
      maxWidth: windowWidth - spacing.xll,
    },
  });
