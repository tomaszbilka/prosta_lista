import React, { useState } from "react";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from "react-native";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const { t } = useTranslation();

  const resetPasswordGandler = () => {
    router.replace("/(tabs)/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t("resetPassword")}</Text>
      <View style={styles.credentials}>
        <Text style={styles.label}>{t("email")}</Text>
        <TextInput
          onChangeText={setEmail}
          style={styles.inputs}
          value={email}
        />
      </View>
      <View style={styles.btn}>
        <Button onPress={resetPasswordGandler} title={t("resetPassword")} />
      </View>
      <View style={styles.backBtn}>
        <Pressable onPress={() => router.replace("/auth/login")}>
          <Text>{t("login")}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  backBtn: {
    marginTop: 20,
    padding: 5,
  },
  btn: {
    marginTop: 10,
    width: "100%",
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 30,
    textAlign: "center",
  },
  credentials: {
    backgroundColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: "100%",
  },
  inputs: {
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 4,
    paddingVertical: 3,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 10,
  },
});
