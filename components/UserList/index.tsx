import { useEffect, useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenWrapper from "components/ScreenWrapper";

import { colors } from "components/styles/colors";
import { getItem } from "utils/storage";
import { addItemAction, normalizeListItems } from "./utils";
import { styles } from "./styles";
import EmptyList from "./EmptyList";
import ListItem from "./ListItem";

import type { TUserList } from "./types";

const UserList = () => {
  const [list, setList] = useState<TUserList | []>([]);
  const [newItem, setNewItem] = useState("");

  const addItemHandler = () =>
    addItemAction({ list, newItem, setList }).then(() => setNewItem(""));

  useEffect(() => {
    getItem("list").then((data) => {
      const normalizedData = normalizeListItems(data);

      setList(normalizedData);
    });
  }, []);

  return (
    <ScreenWrapper>
      <FlatList
        data={list}
        ListEmptyComponent={<EmptyList />}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem id={item.id} setList={setList} title={item.title} />
        )}
        style={styles.flatList}
      />
      <View style={styles.actionContainer}>
        <TextInput
          onChangeText={(newText) => setNewItem(newText)}
          placeholder="Type here to translate!"
          selectionColor={colors.white}
          style={styles.input}
          value={newItem}
        />
        <TouchableOpacity onPress={addItemHandler} style={styles.addButton}>
          <Ionicons name="add" color="black" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default UserList;
