import { Text, View } from "react-native";

import { styles } from "./styles";

type TProps = {
  title: string;
};

function ListItem({ title }: TProps) {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
    </View>
  );
}

export default ListItem;
