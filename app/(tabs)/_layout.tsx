import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: "Home",
          tabBarLabel: "HOME",
        }}
      />
      <Tabs.Screen
        name="tabOne"
        options={{
          headerTitle: "One",
          tabBarLabel: "ONE",
        }}
      />
      <Tabs.Screen
        name="tabTwo"
        options={{ headerTitle: "Two", tabBarLabel: "TWO" }}
      />
      <Tabs.Screen name="posts" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default TabsLayout;
