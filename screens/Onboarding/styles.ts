import { Dimensions, StyleSheet } from "react-native";

import { spacing } from "components/styles/spacing";

import type { ExtendedTheme } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

export const createStyles = (colors: ExtendedTheme["colors"]) =>
  StyleSheet.create({
    addImage: {
      height: 100,
    },
    alert: {
      color: colors.text,
      fontSize: 12,
      marginLeft: spacing.xs,
    },
    alertContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    container: {
      alignItems: "center",
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: "flex-start",
      paddingBottom: spacing.md,
      paddingHorizontal: spacing.base,
    },
    editImage: {
      height: 161,
    },
    image: {
      marginBottom: spacing.lg,
      maxWidth: windowWidth - spacing.md * 2,
      resizeMode: "center",
    },
    info: {
      color: colors.text,
      marginBottom: spacing.xs,
      alignSelf: "flex-start",
    },
    saveImage: {
      height: 230,
    },
    title: {
      color: colors.success,
      fontSize: 22,
      marginBottom: spacing.md,
      marginTop: spacing.lg,
      textAlign: "center",
    },
  });
