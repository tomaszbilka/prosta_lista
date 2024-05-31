import "@react-navigation/native";

// Override the theme in react native navigation to accept our custom theme props.
declare module "@react-navigation/native" {
  export type ExtendedTheme = {
    dark: boolean;
    colors: {
      accent: string;
      background: string;
      black: string;
      border: string;
      card: string;
      disabled: string;
      notification: string;
      primary: string;
      secondary: string;
      success: string;
      text: string;
      warning: string;
      white: string;
    };
  };
  export function useTheme(): ExtendedTheme;
}
