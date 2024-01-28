import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

const TabsLayout = () => {
  const { t } = useTranslation();

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: t("list"),
          tabBarLabel: t("list"),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: t("settings"),
          tabBarLabel: t("settings"),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
