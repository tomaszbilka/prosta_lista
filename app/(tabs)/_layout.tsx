import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { colors } from "components/styles/colors";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={() => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: colors.black,
          height: 60,
        },
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="list-ul"
              size={28}
              color={focused ? colors.success : colors.white}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings"
              size={28}
              color={focused ? colors.success : colors.white}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
