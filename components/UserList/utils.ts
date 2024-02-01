import uuid from "react-native-uuid";

export const normalizeListItem = (label: string) => ({
  title: label,
  id: `${uuid.v4()}`,
});
