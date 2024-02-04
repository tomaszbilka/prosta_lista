import { StyleSheet } from "react-native";

import { colors } from "components/styles/colors";
import { spacing } from "components/styles/spacing";

export const styles = StyleSheet.create({
  button: {
    borderRadius: spacing.base,
    marginVertical: spacing.base,
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.sm,
    width: spacing.xll,
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  flag: {
    alignSelf: "center",
  },
  info: {
    color: colors.white,
  },
});
