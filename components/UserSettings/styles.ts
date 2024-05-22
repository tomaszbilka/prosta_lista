import { Dimensions, StyleSheet } from "react-native";

import { colors } from "components/styles/colors";
import { spacing } from "components/styles/spacing";

const windowWidth = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  addImage: {
    height: 100,
  },
  button: {
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
    justifyContent: "flex-start",
    marginTop: spacing.lg,
    marginHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },
  editImage: {
    height: 161,
  },
  flag: {
    alignSelf: "center",
  },
  image: {
    resizeMode: "center",
    maxWidth: windowWidth - spacing.md * 2,
  },
  info: {
    color: colors.white,
  },
  language: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 2,
    borderColor: colors.white,
  },
  saveImage: {
    height: 230,
  },
  title: {
    color: colors.white,
    fontSize: 18,
    marginBottom: spacing.md,
    marginTop: spacing.lg,
    textAlign: "center",
  },
});
