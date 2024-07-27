import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { colors } from "components/styles/colors";
import { ThemeContextProvider } from "utils/theme/themeContext";

const TabsLayout = () => {
  return (
    <ThemeContextProvider>
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
    </ThemeContextProvider>
  );
};

export default TabsLayout;
