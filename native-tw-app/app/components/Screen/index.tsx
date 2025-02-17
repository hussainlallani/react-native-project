import React from "react";
import { ScrollView } from "react-native";

import ScreenProps from "./model";
import styles from "./styles";

export default function Screen({ children, style }: ScreenProps) {
  return <ScrollView style={[styles.screen, style]}>{children}</ScrollView>;
}
