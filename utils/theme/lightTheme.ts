import { colors } from "components/styles/colors";
import { DefaultTheme } from "@react-navigation/native";

const lightTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
    text: colors.black,
    border: colors.black,
    accent: colors.accent,
    warning: colors.warning,
  },
};

export default lightTheme;
