import React from "react";
import { Text, TouchableOpacity } from "react-native";

import AppButtonProps from "./model";
import styles from "./styles";
import colors from "../../config/colors";

export default function AppButton({
  color = "primary",
  title,
  onPress,
}: AppButtonProps) {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: colors[color] }, styles.button]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
