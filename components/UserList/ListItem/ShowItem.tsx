import { Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

import type { Dispatch, SetStateAction } from "react";

import { colors } from "components/styles/colors";
import { deleteItemAction } from "../utils";
import { styles } from "./styles";

import type { TUserList } from "../types";

type TProps = {
  id: string;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setList: Dispatch<SetStateAction<TUserList | []>>;
  title: string;
};

const ShowItem = ({ id, setIsEdit, setList, title }: TProps) => {
  const deleteItemHandler = () => deleteItemAction({ id, setList });

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
