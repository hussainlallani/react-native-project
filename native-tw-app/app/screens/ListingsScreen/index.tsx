import React from "react";

import Card from "../../components/Card";
import { ListingsScreenProps } from "./model";
import styles from "./styles";
import Screen from "../../components/Screen";
import { Text } from "react-native";

export default function ListingsScreen({ navigation }: ListingsScreenProps) {
  return (
    <>
      <Screen style={styles.screen}>
        <Card
          imageUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
          onPress={() => console.log("Pressed!")}
          title={"Red jacket for sale"}
          subtitle={`$100`}
          thumbnailUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
        />
        <Card
          imageUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
          onPress={() => console.log("Pressed!")}
          title={"Red jacket for sale"}
          subtitle={`$100`}
          thumbnailUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
        />
        <Card
          imageUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
          onPress={() => console.log("Pressed!")}
          title={"Red jacket for sale"}
          subtitle={`$100`}
          thumbnailUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
        />
        <Card
          imageUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
          onPress={() => console.log("Pressed!")}
          title={"Red jacket for sale"}
          subtitle={`$100`}
          thumbnailUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
        />
        <Card
          imageUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
          onPress={() => console.log("Pressed!")}
          title={"Red jacket for sale"}
          subtitle={`$100`}
          thumbnailUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
        />
        <Card
          imageUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
          onPress={() => console.log("Pressed!")}
          title={"Red jacket for sale"}
          subtitle={`$100`}
          thumbnailUrl={
            "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
          }
        />
      </Screen>
    </>
  );
}
