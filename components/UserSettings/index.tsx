import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, TouchableOpacity } from "react-native";
import CountryFlag from "react-native-country-flag";
// import flags from "react-native-country-flag/data";

import { styles } from "./styles";

const UserSettings = () => {
  const [locale, setLocale] = useState<"pl" | "en">("pl");
  const { t, i18n } = useTranslation();

  const changeLocaleHandler = () => {
    setLocale((prev) => (prev === "pl" ? "en" : "pl"));
  };

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <View style={styles.container}>
      <Text style={styles.info}>{`${t("language")}:`}</Text>
      <TouchableOpacity style={styles.button} onPress={changeLocaleHandler}>
        <CountryFlag
          isoCode={locale === "pl" ? "gb" : "pl"}
          size={35}
          style={styles.flag}
        />
      </TouchableOpacity>
    </View>
  );
};

export default UserSettings;
