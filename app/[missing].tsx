import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text>NotFound!!</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
