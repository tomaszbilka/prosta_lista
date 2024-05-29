import "react-native-url-polyfill/auto";
import { Redirect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { getInitLocale } from "i18n/locales/utils";
import { LOCALE } from "utils";
import "../i18n";

const Index = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const startLocale = async () => {
      const initLocale = await getInitLocale();
      i18n.changeLanguage(initLocale || LOCALE.pl);
    };
    startLocale();
  }, []);

  return (
    <SafeAreaView>
      <Redirect href="/home" />
    </SafeAreaView>
  );
};

export default Index;
