import { StyleSheet } from "react-native";

import { colors } from "components/styles/colors";
import { spacing } from "components/styles/spacing";

export const styles = StyleSheet.create({
  actionContainer: {
    flexDirection: "row",
  },
  addButton: {
    alignContent: "center",
    backgroundColor: colors.success,
    borderBottomRightRadius: spacing.xs,
    borderColor: colors.white,
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
    color: colors.black,
    fontSize: spacing.md,
    alignSelf: "center",
  },
  input: {
    borderBottomLeftRadius: spacing.xs,
    borderColor: colors.white,
    borderTopLeftRadius: spacing.xs,
    borderWidth: 1,
    color: colors.white,
    flex: 5,
    fontSize: spacing.base,
    height: spacing.lg,
    paddingHorizontal: spacing.xs,
  },
});
