import { View, Text } from "react-native";
import React from "react";

const Welcome = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Welcome!</Text>
    </View>
  );
};

export default Welcome;
