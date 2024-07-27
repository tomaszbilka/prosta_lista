import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ScreenWrapper from "components/ScreenWrapper";
import TabMenu from "components/Menu/TabMenu";
import TodoList from "screens/TodoList";
import ShopList from "screens/ShopList";

const Home = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <ScreenWrapper>
      <Tab.Navigator
        initialRouteName="UserList"
        tabBar={(props) => <TabMenu {...props} />}
      >
        <Tab.Screen name="UserList" component={ShopList} />
        <Tab.Screen name="TodoList" component={TodoList} />
      </Tab.Navigator>
    </ScreenWrapper>
  );
};

export default Home;
