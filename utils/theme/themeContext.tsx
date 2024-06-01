import { createContext, useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import type { ReactNode } from "react";

import darkTheme from "utils/theme/darkTheme";
import lightTheme from "utils/theme/lightTheme";
import { getInitTheme, storeNewTheme, THEMES } from "./utils";

type ThemeContextProps = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextProps | null>({
  isDarkTheme: true,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = async () => {
    await storeNewTheme(isDarkTheme ? THEMES.light : THEMES.dark);
    setIsDarkTheme((prev) => !prev);
  };

  const themeValue = {
    isDarkTheme,
    toggleTheme,
  };

  useEffect(() => {
    const startTheme = async () => {
      const newTheme = await getInitTheme();
      setIsDarkTheme(newTheme);
    };
    startTheme();
  }, []);

  return (
    <NavigationContainer
      theme={isDarkTheme ? darkTheme : lightTheme}
      independent={true}
    >
      <ThemeContext.Provider value={themeValue}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
