import { StyleSheet, StatusBar } from "react-native";

import { colors } from "components/styles/colors";
import { spacing } from "components/styles/spacing";

const topPadding = (StatusBar?.currentHeight || 30) + 4;

export const styles = StyleSheet.create({
  container: {
    paddingTop: topPadding,
    marginBottom: spacing.xl,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    borderBottomColor: colors.white,
    position: "relative",
  },
  item: {
    borderBottomColor: colors.white,
    borderLeftColor: colors.white,
    borderRightColor: colors.white,
    borderWidth: 1,
    padding: spacing.sm,
    position: "absolute",
    bottom: -58,
    width: 60,
    zIndex: 1,
    backgroundColor: colors.black,
  },
  borderTop: {
    borderTopColor: colors.white,
    borderWidth: 1,
  },
  left: {
    right: "50%",
    borderBottomLeftRadius: spacing.base,
  },
  notFocused: {
    backgroundColor: "#111111",
  },
  right: {
    left: "50%",
    borderBottomRightRadius: spacing.base,
  },
  iconContainer: {
    zIndex: 9999,
  },
});
