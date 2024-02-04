import { View, Text, StyleSheet } from "react-native";
import { colors } from "components/styles/colors";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.white }}>{t("notFound")}</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
    justifyContent: "center",
  },
});
