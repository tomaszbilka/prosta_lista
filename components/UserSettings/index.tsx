import { useState } from "react";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { View, Text, Button } from "react-native";

import { styles } from "./styles";

const UserSettings = () => {
  const [locale, setLocale] = useState<"pl" | "en">("pl");
  const { t, i18n } = useTranslation();

  const changeLocaleHandler = () => {
    setLocale((prev) => (prev === "pl" ? "en" : "pl"));
    i18n.changeLanguage(locale);
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>{t("settings")}</Text>
      <Button title="Go back" onPress={() => router.back()} />
      <Button title={locale} onPress={changeLocaleHandler} />
    </View>
  );
};

export default UserSettings;
