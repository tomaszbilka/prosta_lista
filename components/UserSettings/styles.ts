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
    button: {
      alignContent: "center",
      alignSelf: "center",
      justifyContent: "center",
      marginVertical: spacing.base,
      paddingHorizontal: spacing.xs,
      paddingVertical: spacing.sm,
      width: spacing.xll,
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
    flag: {
      alignSelf: "center",
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
    language: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    lngText: {
      color: colors.text,
    },
    saveImage: {
      height: 230,
    },
    switch: {
      marginLeft: spacing.base,
      transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }],
    },
    switchIcon: {
      marginLeft: spacing.sm,
    },
    themeContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    title: {
      color: colors.success,
      fontSize: 22,
      marginBottom: spacing.md,
      marginTop: spacing.lg,
      textAlign: "center",
    },
  });
