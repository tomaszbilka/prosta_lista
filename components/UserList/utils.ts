import uuid from "react-native-uuid";

import type { TUserList } from "./types";

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
