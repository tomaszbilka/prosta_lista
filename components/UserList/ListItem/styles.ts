import { colors } from "components/styles/colors";
import { spacing } from "components/styles/spacing";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: colors.white,
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
    color: colors.white,
    fontSize: 20,
  },
});
