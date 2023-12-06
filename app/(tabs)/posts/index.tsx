import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Posts = () => {
  return (
    <View style={styles.container}>
      <Text>Posts</Text>
      <Link style={styles.btn} href="/posts/1">
        open post 1
      </Link>
      <Link style={styles.btn} href="/posts/2">
        open post 2
      </Link>
      <Link style={styles.btn} href="/posts/3">
        open post 3
      </Link>
    </View>
  );
};

export default Posts;

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
