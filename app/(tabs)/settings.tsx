import React, { useState } from "react";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet, Button } from "react-native";

const TabOne = () => {
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

export default TabOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
