import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const PostDetails = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Post Details ${id}` }} />
      <Text>Post Details Page: {id}</Text>
    </View>
  );
};

export default PostDetails;
