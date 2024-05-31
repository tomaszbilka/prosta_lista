import { View, StyleSheet, Pressable } from "react-native";
import { useTheme } from "@react-navigation/native";

import type { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

import { getTabIcon } from "./utils";
import { createStyles } from "./styles";

const MyTabBar = ({ state, navigation }: MaterialTopTabBarProps) => {
  const { colors, dark } = useTheme();

  const styles = createStyles(colors);

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
        const icon = getTabIcon(route.name, dark);

        return (
          <Pressable
            style={StyleSheet.flatten([
              styles.item,
              !isFocused ? styles.notFocused : null,
            ])}
            onPress={onPress}
            key={route.name}
          >
            <View>{icon}</View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default MyTabBar;
