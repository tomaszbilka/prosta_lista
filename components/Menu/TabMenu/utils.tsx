import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { colors } from "components/styles/colors";

export const getTabIcon = (routeName: string, dark: boolean) => {
  switch (routeName) {
    case "UserList":
      return (
        <FontAwesome
          color={dark ? colors.white : colors.black}
          name="shopping-cart"
          size={24}
        />
      );

    case "TodoList":
      return (
        <FontAwesome
          color={dark ? colors.white : colors.black}
          name="list-ul"
          size={24}
        />
      );

    case "Settings":
      return (
        <FontAwesome
          color={dark ? colors.white : colors.black}
          name="wrench"
          size={24}
        />
      );

    case "Manual":
      return (
        <Entypo
          color={dark ? colors.white : colors.black}
          name="help"
          size={24}
        />
      );

    default:
      break;
  }
};
