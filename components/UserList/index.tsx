import { useState } from "react";
import { FlatList, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import uuid from "react-native-uuid";

import { colors } from "components/styles/colors";
import { styles } from "./styles";
import ListItem from "./ListItem";

const UserList = () => {
  const [list, setList] = useState<{ title: string; id: string }[] | []>([]);
  const [newItem, setNewItem] = useState("");

  const addItemHandler = () => {
    const newListItem = {
      title: newItem,
      id: `${uuid.v4()}`,
    };
    setList((prev) => [...prev, newListItem]);
    setNewItem("");
  };

  return (
    <>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem title={item.title} />}
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
