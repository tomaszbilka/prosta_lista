import React, { useState } from "react";
import { Button, Text, View } from "react-native";

import { useTranslation } from "react-i18next";

const Test = () => {
  const [locale, setLocale] = useState<"pl" | "en">("pl");
  const { t, i18n } = useTranslation(["common", "test"]);

  const changeLocaleHandler = () => {
    setLocale((prev) => (prev === "pl" ? "en" : "pl"));

    i18n.changeLanguage(locale);
  };

  return (
    <View>
      <Text>{t("test", { ns: "test" })}</Text>
      <Button title={locale} onPress={changeLocaleHandler} />
    </View>
  );
};

export default Test;
