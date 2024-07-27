import { colors } from "components/styles/colors";
import { DefaultTheme } from "@react-navigation/native";

const darkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    accent: colors.accent,
    background: colors.black,
    black: colors.black,
    border: colors.white,
    disabled: colors.disabled,
    secondary: colors.secondary,
    success: colors.success,
    text: colors.white,
    warning: colors.warning,
    white: colors.white,
  },
};

export default darkTheme;
