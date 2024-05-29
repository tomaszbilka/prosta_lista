import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, TouchableOpacity } from "react-native";
import CountryFlag from "react-native-country-flag";

import { getInitLocale, storeNewLocale } from "i18n/locales/utils";
import { LOCALE } from "utils";
import { styles } from "./styles";
import { useIsMount } from "hooks/useIsMount";

import type { TLocale } from "utils/types";

const UserSettings = () => {
  const [locale, setLocale] = useState<TLocale>(LOCALE.pl);
  const { t, i18n } = useTranslation();
  const isMount = useIsMount();

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
    </View>
  );
};

export default UserSettings;
