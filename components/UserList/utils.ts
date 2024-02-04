import uuid from "react-native-uuid";

import { getItem, storeItem } from "utils/storage";

import type { TAddItemAction, TDeletItemAction, TUserList } from "./types";

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
}: TAddItemAction) => {
  if (newItem.length === 0) return;

  const newListItem = normalizeListItem(newItem);

  const storedList = (await getItem("list")) || [];

  if (list.length === 0) {
    await storeItem("list", newListItem.title);
  } else {
    await storeItem("list", `${storedList},${newListItem.title}`);
  }

  setList((prev) => [...prev, newListItem]);
};

export const deleteItemAction = ({ id, setList }: TDeletItemAction) => {
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
