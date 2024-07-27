import uuid from "react-native-uuid";

import { getItem, storeItem } from "utils/storage";

import type {
  TAddItemAction,
  TDeletItemAction,
  TListName,
  TUpdateItemAction,
  TUserList,
} from "./types";

export const normalizeListItem = (label: string) => ({
  title: label,
  id: `${uuid.v4()}`,
});

export const normalizeListItems = (data: string) => {
  if (!data || data?.length === 0) return [];

  return data?.split(",").map((label: string) => ({
    title: label,
    id: `${uuid.v4()}`,
  }));
};

export const denormalizeListItems = (listItems: TUserList | []) =>
  listItems.map((item) => item.title).join(",");

export const addItemAction = async ({
  list,
  newItem,
  setList,
  listName,
}: TAddItemAction) => {
  if (newItem.length === 0) return;

  const newListItem = normalizeListItem(newItem);

  const storedList = (await getItem(listName)) || [];

  if (list.length === 0) {
    await storeItem(listName, newListItem.title);
  } else {
    await storeItem(listName, `${storedList},${newListItem.title}`);
  }

  setList((prev) => [...prev, newListItem]);
};

export const deleteItemAction = ({
  id,
  listName,
  setList,
}: TDeletItemAction) => {
  setList((prev) => {
    const filteredList = prev.filter((item) => item.id !== id);
    const denormalizeList = denormalizeListItems(filteredList);
    replaceOldList(listName, denormalizeList);

    return filteredList;
  });
};

export const updateItemAction = ({
  id,
  editedTitle,
  listName,
  setList,
}: TUpdateItemAction) => {
  setList((prevList) => {
    const updatedList = prevList.map((item) =>
      item.id === id ? { id, title: editedTitle } : item
    );
    const denormalizedList = denormalizeListItems(updatedList);

    replaceOldList(listName, denormalizedList);

    return updatedList;
  });
};

const replaceOldList = async (listName: TListName, denormalizeList: string) => {
  await storeItem(listName, denormalizeList);
};
