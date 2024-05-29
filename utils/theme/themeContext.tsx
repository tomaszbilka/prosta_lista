import { createContext, useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import type { ReactNode } from "react";

import darkTheme from "utils/theme/darkTheme";
import lightTheme from "utils/theme/lightTheme";

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

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const themeValue = {
    isDarkTheme,
    toggleTheme,
  };

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
