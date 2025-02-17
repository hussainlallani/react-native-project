import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native";
import AppText from "../AppText";
import CardProps from "./model";
import styles from "./styles";

// TypeScript workaround with 'as any'
const ImageComponent = Image as any;

export default function Card({
  imageUrl,
  onPress,
  subtitle,
  thumbnailUrl,
  title,
}: CardProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <ImageComponent
          preview={{ uri: thumbnailUrl }}
          style={styles.image}
          tint="light"
          source={{
            uri: imageUrl,
          }}
        />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
