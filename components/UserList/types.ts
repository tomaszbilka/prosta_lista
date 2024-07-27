import type { Dispatch, SetStateAction } from "react";

export type TUserList = { title: string; id: string }[];

export type TAddItemAction = {
  list: TUserList | [];
  listName?: TListName;
  newItem: string;
  setList: Dispatch<SetStateAction<TUserList | []>>;
};

export type TDeletItemAction = {
  id: string;
  listName?: TListName;
  setList: Dispatch<SetStateAction<TUserList | []>>;
};

export type TUpdateItemAction = {
  editedTitle: string;
  id: string;
  listName?: TListName;
  setList: Dispatch<SetStateAction<TUserList | []>>;
};

export type TListName = "list" | "todo";
