import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TabMenu from "components/Menu/TabMenu";
import ScreenWrapper from "components/ScreenWrapper";
import UserSettings from "components/UserSettings";
import Onboarding from "components/UserSettings/Onboarding";

const Settings = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <ScreenWrapper>
      <Tab.Navigator
        initialRouteName="UserList"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: {
            backgroundColor: "black",
            paddingTop: 20,
          },
          tabBarItemStyle: {
            borderColor: "white",
            borderWidth: 1,
          },
        }}
        tabBar={(props) => <TabMenu {...props} />}
      >
        <Tab.Screen name="Settings" component={UserSettings} />
        <Tab.Screen name="Manual" component={Onboarding} />
      </Tab.Navigator>
    </ScreenWrapper>
  );
};

export default Settings;
