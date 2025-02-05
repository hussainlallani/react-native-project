import React from "react";
import { Image, Text, View } from "react-native";
import colors from "../../config/colors";

const ViewImageScreen = () => {
  const defaultButtonStyle =
    "absolute text-xl align-middle text-center h-10 w-10 top-5";
  return (
    <View className="bg-black">
      <Text className={`${defaultButtonStyle} bg-[${colors.primary}] left-5`}>
        X
      </Text>
      <Text
        className={`${defaultButtonStyle} bg-[${colors.secondary}] right-5`}
      >
        X
      </Text>
      <Image
        source={require("./assets/chair.jpg")}
        className="w-full h-full"
        style={{ resizeMode: "contain" }}
      />
    </View>
  );
};

export default ViewImageScreen;
