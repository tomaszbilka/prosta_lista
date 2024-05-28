import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { colors } from "components/styles/colors";

export const getTabIcon = (routeName: string, isFocused: boolean) => {
  switch (routeName) {
    case "UserList":
      return (
        <FontAwesome
          color={isFocused ? colors.success : colors.white}
          name="list-ul"
          size={24}
        />
      );

    case "TodoList":
      return (
        <FontAwesome
          color={isFocused ? colors.success : colors.white}
          name="shopping-cart"
          size={24}
        />
      );

    case "Settings":
      return (
        <FontAwesome
          color={isFocused ? colors.success : colors.white}
          name="wrench"
          size={24}
        />
      );

    case "Manual":
      return (
        <Entypo
          color={isFocused ? colors.success : colors.white}
          name="help"
          size={24}
        />
      );

    default:
      break;
  }
};
