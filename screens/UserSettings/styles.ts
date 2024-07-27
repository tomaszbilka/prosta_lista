import { Dimensions, StyleSheet } from "react-native";

import { spacing } from "components/styles/spacing";

import type { ExtendedTheme } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

export const createStyles = (colors: ExtendedTheme["colors"]) =>
  StyleSheet.create({
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

    flag: {
      alignSelf: "center",
    },
    language: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    lngText: {
      color: colors.text,
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
  });
