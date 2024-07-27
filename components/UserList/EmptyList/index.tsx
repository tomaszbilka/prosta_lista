import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";
import { useTheme } from "@react-navigation/native";

import { createStyles } from "./styles";

const EmptyList = () => {
  const { t } = useTranslation("common");
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>{`${t("emptyList")}!`}</Text>
    </View>
  );
};

export default EmptyList;
