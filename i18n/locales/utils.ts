import { getItem, storeItem } from "utils/storage";

import type { TLocale } from "utils/types";

export const getInitLocale = async () => await getItem("locale");

export const storeNewLocale = async (locale: TLocale) => {
  await storeItem("locale", locale);
};
