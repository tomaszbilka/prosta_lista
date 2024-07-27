import { StyleSheet } from "react-native";

import type { ExtendedTheme } from "@react-navigation/native";

import { spacing } from "components/styles/spacing";

export const createStyles = (colors: ExtendedTheme["colors"]) =>
  StyleSheet.create({
    actionContainer: {
      flexDirection: "row",
      marginBottom: spacing.xxs,
      marginHorizontal: spacing.xxs,
    },
    addButton: {
      alignContent: "center",
      backgroundColor: colors.success,
      borderBottomRightRadius: spacing.xs,
      borderColor: colors.border,
      borderTopRightRadius: spacing.xs,
      borderWidth: 1,
      flex: 1,
      justifyContent: "center",
    },
    flatList: {
      alignSelf: "stretch",
      marginHorizontal: spacing.xs,
    },
    icon: {
      color: colors.background,
      fontSize: spacing.md,
      alignSelf: "center",
    },
    input: {
      borderBottomLeftRadius: spacing.xs,
      borderColor: colors.border,
      borderTopLeftRadius: spacing.xs,
      borderWidth: 1,
      color: colors.text,
      flex: 5,
      fontSize: spacing.base,
      height: spacing.lg,
      paddingHorizontal: spacing.xs,
    },
  });
