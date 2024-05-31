import { colors } from "components/styles/colors";
import { DefaultTheme } from "@react-navigation/native";

const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    accent: colors.accent,
    background: colors.bgLight,
    black: colors.black,
    border: colors.black,
    disabled: colors.disabled,
    secondary: colors.secondary,
    success: colors.success,
    text: colors.black,
    warning: colors.warning,
    white: colors.white,
  },
};

export default lightTheme;
