import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

const TabOne = () => {
  return (
    <View style={styles.container}>
      <Text>TAB ONE</Text>
      <Button title="Go back" onPress={() => router.back()} />
    </View>
  );
};

export default TabOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
