import { useEffect, useState } from "react";
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "components/styles/colors";
import { getItem, storeItem } from "utils/storage";
import { normalizeListItem } from "./utils";
import { styles } from "./styles";
import ListItem from "./ListItem";

import type { TUserList } from "./types";

const UserList = () => {
  const [list, setList] = useState<TUserList | []>([]);
  const [isLaoding, setIsLoading] = useState(true);
  const [newItem, setNewItem] = useState("");

  const addItemHandler = async () => {
    const newListItem = normalizeListItem(newItem);

    const storedList = (await getItem("list")) || [];
    await storeItem("list", `${storedList},${newListItem.title}`);

    setList((prev) => [...prev, newListItem]);
    setNewItem("");
  };

  useEffect(() => {
    getItem("list")
      .then((data) => {
        const normalizedData = data
          .split(",")
          .map((item: string) => normalizeListItem(item));

        setList(normalizedData || []);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLaoding ? (
        <View style={{ flex: 1 }}>
          <Text style={{ color: "white" }}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListItem title={item.title} />}
        />
      )}

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
