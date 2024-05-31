import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";

import type { Dispatch, SetStateAction } from "react";

import { createStyles } from "./styles";
import EditItem from "./EditItem";
import ShowItem from "./ShowItem";

import type { TUserList } from "../types";

type TProps = {
  id: string;
  setList: Dispatch<SetStateAction<TUserList | []>>;
  title: string;
};

const ListItem = ({ id, setList, title }: TProps) => {
  const [isEdit, setIsEdit] = useState(false);
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View
      style={StyleSheet.flatten([
        styles.container,
        isEdit ? styles.editBorder : null,
      ])}
    >
      {isEdit ? (
        <EditItem
          id={id}
          setIsEdit={setIsEdit}
          setList={setList}
          title={title}
        />
      ) : (
        <ShowItem
          id={id}
          setIsEdit={setIsEdit}
          setList={setList}
          title={title}
        />
      )}
    </View>
  );
};

export default ListItem;
