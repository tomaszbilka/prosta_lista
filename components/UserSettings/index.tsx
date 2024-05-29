import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import CountryFlag from "react-native-country-flag";

import { colors } from "components/styles/colors";
import { getInitLocale, storeNewLocale } from "i18n/locales/utils";
import { LOCALE } from "utils";
import { styles } from "./styles";
import { useIsMount } from "hooks/useIsMount";
import { useThemeContext } from "utils/theme/themeContext";

import type { TLocale } from "utils/types";

const UserSettings = () => {
  const [locale, setLocale] = useState<TLocale>(LOCALE.pl);
  const { t, i18n } = useTranslation();
  const isMount = useIsMount();

  const ctx = useThemeContext();

  const isDarkTheme = ctx?.isDarkTheme;
  const toggleTheme = ctx?.toggleTheme;

  const changeLocaleHandler = () => {
    setLocale((prev) => (prev === LOCALE.pl ? LOCALE.en : LOCALE.pl));
  };

  useEffect(() => {
    const startLocale = async () => {
      const initLocale = await getInitLocale();
      setLocale(initLocale);
    };
    startLocale();
  }, []);

  useEffect(() => {
    if (isMount) {
      i18n.changeLanguage(locale);
      const saveLocale = async () => {
        await storeNewLocale(locale);
      };
      saveLocale();
    }
  }, [locale]);

  const toogleTheme = () => {
    if (toggleTheme) {
      toggleTheme();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.language}>
        <Text style={styles.lngText}>{`${t("language")}:`}</Text>
        <TouchableOpacity style={styles.button} onPress={changeLocaleHandler}>
          <CountryFlag
            isoCode={locale === LOCALE.pl ? LOCALE.gb : LOCALE.pl}
            size={30}
            style={styles.flag}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.themeContainer}>
        <Text style={styles.lngText}>{t("theme")}:</Text>
        <MaterialCommunityIcons
          name="theme-light-dark"
          size={48}
          color={colors.success}
          style={styles.switchIcon}
        />
        <Switch
          style={styles.switch}
          value={isDarkTheme}
          onValueChange={toogleTheme}
          thumbColor={colors.success}
          trackColor={{ false: colors.black, true: colors.white }}
        />
      </View>
    </View>
  );
};

export default UserSettings;
