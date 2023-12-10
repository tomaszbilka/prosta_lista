import { Button, StyleSheet, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { supabase } from "api/supabase";
import Test from "components/Test";

const Home = () => {
  return (
    <View style={styles.container}>
      <Test />
      <StatusBar style="auto" />
      <Text>HOME</Text>
      <Button
        title="LOGOUT"
        onPress={() => {
          supabase.auth.signOut();
          router.push("auth/login");
        }}
      />
      <Link style={styles.btn} href="/(tabs)/tabOne">
        Go to TAB one
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    padding: 5,
    paddingHorizontal: 15,
    backgroundColor: "#ddd",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
