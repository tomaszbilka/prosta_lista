import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import ScreenWrapper from "components/ScreenWrapper";
import TabMenu from "components/Menu/TabMenu";
import TodoList from "components/TodoList";
import UserList from "components/UserList";

const Home = () => {
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
        <Tab.Screen name="UserList" component={UserList} />
        <Tab.Screen name="TodoList" component={TodoList} />
      </Tab.Navigator>
    </ScreenWrapper>
  );
};

export default Home;
