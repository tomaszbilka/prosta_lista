import { getItem, storeItem } from "utils/storage";

export const THEMES = {
  light: "light",
  dark: "dark",
} as const;

export const getInitTheme = async () => {
  const theme = await getItem("theme");
  return theme === THEMES.dark;
};

export const storeNewTheme = async (locale: keyof typeof THEMES) => {
  await storeItem("theme", locale);
};
