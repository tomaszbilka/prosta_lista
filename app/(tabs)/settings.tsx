import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Onboarding from "components/UserSettings/Onboarding";
import ScreenWrapper from "components/ScreenWrapper";
import TabMenu from "components/Menu/TabMenu";
import UserSettings from "components/UserSettings";

const Settings = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <ScreenWrapper>
      <Tab.Navigator
        initialRouteName="UserList"
        tabBar={(props) => <TabMenu {...props} />}
      >
        <Tab.Screen name="Settings" component={UserSettings} />
        <Tab.Screen name="Manual" component={Onboarding} />
      </Tab.Navigator>
    </ScreenWrapper>
  );
};

export default Settings;
