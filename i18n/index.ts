import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import en from "./locales/en";
import pl from "./locales/pl";

export const defaultNS = "common";

export const resources = {
  en,
  pl,
} as const;

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  defaultNS,
  fallbackLng: "pl",
  interpolation: { escapeValue: false },
  lng: "pl",
  resources,
  supportedLngs: ["en", "pl"],
});

export default i18n;
