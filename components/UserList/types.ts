import type { Dispatch, SetStateAction } from "react";

export type TUserList = { title: string; id: string }[];

export type TAddItemAction = {
  list: TUserList | [];
  newItem: string;
  setList: Dispatch<SetStateAction<TUserList | []>>;
};

export type TDeletItemAction = {
  id: string;
  setList: Dispatch<SetStateAction<TUserList | []>>;
};
