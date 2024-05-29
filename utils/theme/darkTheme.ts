import { colors } from "components/styles/colors";
import { DefaultTheme } from "@react-navigation/native";

const darkTheme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: colors.black,
    text: colors.white,
    border: colors.white,
    accent: colors.accent,
    warning: colors.warning,
  },
};

export default darkTheme;
