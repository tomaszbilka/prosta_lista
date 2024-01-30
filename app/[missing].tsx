import { View, Text, StyleSheet } from "react-native";
import React from "react";

const NotFound = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>NotFound!!</Text>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
