import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../config/colors";

const AppButton = ({
  color = colors.primary,
  title,
  onPress = () => alert("Clicked"),
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ backgroundColor: colors[color] }}
      className={`w-full rounded-full h-20 items-center justify-center`}
    >
      <Text className="font-bold uppercase text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;
