import { StyleSheet } from "react-native";

import { colors } from "components/styles/colors";
import { spacing } from "components/styles/spacing";

export const styles = StyleSheet.create({
  empty: {
    marginTop: spacing.lg,
  },
  emptyText: {
    color: colors.white,
    fontSize: 20,
    textAlign: "center",
  },
});
