import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import AppButton from "../../components/AppButton";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      blurRadius={2}
      source={require("./assets/background.jpg")}
      className="h-screen flex justify-between p-5"
    >
      <View className="flex-1 gap-10 justify-center items-center">
        <Image
          source={require("../../../assets/red_logo.jpg")}
          className="w-[100px] h-[100px]"
        />
        <Text className="text-xl">Sell what you don&apos;t need</Text>
      </View>
      <View className="flex gap-5">
        <AppButton title="Login" color="primary" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
};

export default Welcome;
