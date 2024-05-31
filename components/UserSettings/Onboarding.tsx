import React from "react";
import { Image, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useTranslation } from "react-i18next";

import { createStyles } from "./styles";

const Onboarding = () => {
  const { t } = useTranslation("onboarding");
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{t("title")}:</Text>
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
        <View style={styles.alertContainer}>
          <Ionicons name="warning-outline" size={24} color={colors.warning} />
          <Text style={styles.alert}>{t("localStorageInfo")}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Onboarding;
