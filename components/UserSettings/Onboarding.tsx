import React from "react";
import { Image, Text } from "react-native";
import { ScrollView, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";

import { styles } from "./styles";

const Onboarding = () => {
  const { t } = useTranslation("onboarding");

  return (
    <ScrollView>
      <Text style={styles.title}>{t("title")}</Text>
      <Text style={styles.info}>{t("addItem")}:</Text>
      <Image
        style={StyleSheet.flatten([styles.image, styles.addImage])}
        source={require("../../assets/addItem.png")}
      />
      <Text style={styles.info}>{t("editItem")}:</Text>
      <Image
        style={StyleSheet.flatten([styles.image, styles.editImage])}
        source={require("../../assets/editItem.png")}
      />
      <Text style={styles.info}>{t("saveItem")}:</Text>
      <Image
        style={StyleSheet.flatten([styles.image, styles.saveImage])}
        source={require("../../assets/saveItem.png")}
      />
    </ScrollView>
  );
};

export default Onboarding;
