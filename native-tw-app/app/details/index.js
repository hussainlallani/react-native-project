import React from "react";
import { Text, View } from "react-native";
// import { useRouter } from "expo-router";

const Details = () => {
  // const { query } = useRouter(); // Get query parameters (like id)

  // const userId = query.id; // Access the user ID from the URL

  return (
    <View>
      <Text>User ID: </Text>
      {/* You can now fetch and display more user data using the userId */}
    </View>
  );
};

export default Details;
