import { useEffect, useRef, useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { Keyboard, TextInput, TouchableOpacity } from "react-native";

import type { Dispatch, SetStateAction } from "react";

import { colors } from "components/styles/colors";
import { styles } from "./styles";
import { updateItemAction } from "../utils";

import type { TUserList } from "../types";

type TProps = {
  id: string;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setList: Dispatch<SetStateAction<TUserList | []>>;
  title: string;
};

const EditItem = ({ id, setIsEdit, setList, title }: TProps) => {
  const [editedTitle, setEditedTitle] = useState(title);
  const refInput = useRef<TextInput>(null);

  const updateItemHandler = () => {
    updateItemAction({ id, editedTitle, setList });
    setIsEdit(false);
  };

  useEffect(() => {
    refInput?.current?.focus();
  }, []);

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        updateItemHandler();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, [editedTitle]);

  return (
    <>
      <TextInput
        onChangeText={(newText) => setEditedTitle(newText)}
        ref={refInput}
        selectionColor={colors.white}
        style={styles.text}
        value={editedTitle}
      />
      <TouchableOpacity onPress={updateItemHandler}>
        <Fontisto name="save" size={24} color={colors.accent} />
      </TouchableOpacity>
    </>
  );
};

export default EditItem;
