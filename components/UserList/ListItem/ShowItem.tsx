import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";

import type { Dispatch, SetStateAction } from "react";

import { createStyles } from "./styles";
import { deleteItemAction } from "../utils";

import type { TListName, TUserList } from "../types";

type TProps = {
  id: string;
  listName: TListName;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setList: Dispatch<SetStateAction<TUserList | []>>;
  title: string;
};

const ShowItem = ({ id, listName, setIsEdit, setList, title }: TProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);

  const deleteItemHandler = () => deleteItemAction({ id, listName, setList });

  const editItemHandler = () => {
    setIsEdit(true);
  };

  return (
    <>
      <TouchableOpacity onLongPress={editItemHandler}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteItemHandler}>
        <Feather name="check-square" size={24} color={colors.success} />
      </TouchableOpacity>
    </>
  );
};

export default ShowItem;
