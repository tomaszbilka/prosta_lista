import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

import { colors } from "components/styles/colors";

const TabsLayout = () => {
  const { t } = useTranslation();

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
          headerTitle: t("list"),
          tabBarLabel: t("list"),
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="list-ul"
              size={28}
              color={focused ? colors.accent : colors.white}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: t("settings"),
          tabBarLabel: t("settings"),
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings"
              size={28}
              color={focused ? colors.accent : colors.white}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
