import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

import type { Dispatch, SetStateAction } from "react";

import { colors } from "components/styles/colors";
import { denormalizeListItems } from "../utils";
import { storeItem } from "utils/storage";
import { styles } from "./styles";

import type { TUserList } from "../types";

type TProps = {
  id: string;
  setList: Dispatch<SetStateAction<TUserList | []>>;
  title: string;
};

const ListItem = ({ id, setList, title }: TProps) => {
  const deleteItemHandler = () => {
    setList((prev) => {
      const replaceOldList = async (denormalizeList: string) => {
        await storeItem("list", denormalizeList);
      };

      const filteredList = prev.filter((item) => item.id !== id);
      const denormalizeList = denormalizeListItems(filteredList);
      replaceOldList(denormalizeList);

      return filteredList;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={deleteItemHandler}>
        <Feather name="check-square" size={24} color={colors.success} />
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;
