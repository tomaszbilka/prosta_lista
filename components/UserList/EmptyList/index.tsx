import { Text, View } from "react-native";
import { useTranslation } from "react-i18next";

import { styles } from "./styles";

const EmptyList = () => {
  const { t } = useTranslation("common");

  return (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>{`${t("emptyList")}!`}</Text>
    </View>
  );
};

export default EmptyList;
