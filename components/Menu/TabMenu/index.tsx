import { View, StyleSheet, Pressable } from "react-native";

import type { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

import { getTabIcon } from "./utils";
import { styles } from "./styles";

const MyTabBar = ({ state, navigation }: MaterialTopTabBarProps) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const icon = getTabIcon(route.name, isFocused);

        return (
          <Pressable
            style={StyleSheet.flatten([
              styles.item,
              !isFocused ? styles.notFocused : null,
              !isFocused ? styles.borderTop : null,
              index === 0 ? styles.left : styles.right,
            ])}
            onPress={onPress}
            key={route.name}
          >
            <View style={styles.iconContainer}>{icon}</View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default MyTabBar;
