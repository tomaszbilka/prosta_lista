import { useEffect, useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "components/styles/colors";
import { getItem, storeItem } from "utils/storage";
import { normalizeListItem, normalizeListItems } from "./utils";
import { styles } from "./styles";
import EmptyList from "./EmptyList";
import ListItem from "./ListItem";

import type { TUserList } from "./types";

const UserList = () => {
  const [list, setList] = useState<TUserList | []>([]);
  const [newItem, setNewItem] = useState("");

  const addItemHandler = async () => {
    if (newItem.length === 0) return;

    const newListItem = normalizeListItem(newItem);

    const storedList = (await getItem("list")) || [];

    if (list.length === 0) {
      await storeItem("list", newListItem.title);
    } else {
      await storeItem("list", `${storedList},${newListItem.title}`);
    }

    setList((prev) => [...prev, newListItem]);
    setNewItem("");
  };

  useEffect(() => {
    getItem("list").then((data) => {
      const normalizedData = normalizeListItems(data);

      setList(normalizedData);
    });
  }, []);

  return (
    <>
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
    </>
  );
};

export default UserList;
