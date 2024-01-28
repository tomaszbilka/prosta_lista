import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Lista HERE</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
