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
  Alert,
} from "react-native";

import { supabase } from "api/supabase";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { t } = useTranslation();

  const loginHandler = async () => {
    setIsLoading(true);
    if (!isLogin) {
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) Alert.alert(error.message);
      if (!error && !session) Alert.alert(t("emailVerification"));
    } else {
      const {
        data: { session },
        error,
      } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) Alert.alert(error.message);
      if (session && !error) router.replace("/(tabs)/home");
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? t("login") : t("register")}</Text>
      <View style={styles.credentials}>
        <Text style={styles.label}>{t("email")}</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={setEmail}
          value={email}
        />
        <Text style={styles.label}>{t("password")}</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={setPassword}
          value={password}
        />
      </View>
      <View style={styles.btn}>
        <Button
          disabled={isLoading}
          onPress={loginHandler}
          title={isLogin ? t("login") : t("register")}
        />
      </View>
      <View style={styles.btn}>
        <Button
          color={"#ccc"}
          disabled={isLoading}
          onPress={() => setIsLogin((prev) => !prev)}
          title={isLogin ? t("register") : t("login")}
        />
      </View>
      {isLogin && (
        <View style={styles.resetBtn}>
          <Pressable
            onPress={() => !isLoading && router.replace("auth/resetPassword")}
          >
            <Text>{t("resetPassword")}</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
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
  resetBtn: {
    marginTop: 20,
    padding: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 10,
  },
});
