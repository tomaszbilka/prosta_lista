import Test from "components/Test";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Test />
      <StatusBar style="auto" />
      <Text>HOME</Text>
      <Link style={styles.btn} href="auth/login">
        Go to Login page
      </Link>
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
