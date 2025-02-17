import React from "react";
import { Image, KeyboardAvoidingView, Platform, View } from "react-native";
import styles from "./styles";
import ListItem from "../../components/lists/ListItem"; // Ensure this is imported correctly
import AppText from "../../components/AppText"; // Ensure this is imported correctly

export default function ListingDetailsScreen() {
  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        style={styles.image} // Make sure styles.image is correctly defined
        source={{
          uri: "https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg",
        }}
      />
      <View style={styles.detailsContainer}>
        {" "}
        {/* Make sure styles.detailsContainer is correctly defined */}
        <AppText style={styles.title}>{"Red jacket for sale"}</AppText>
        <AppText style={styles.subtitle}>{`$${"100"}`}</AppText>
        <View style={styles.listItemContainer}>
          {" "}
          {/* Make sure styles.listItemContainer is correctly defined */}
          <ListItem
            image="https://www.shutterstock.com/image-vector/blank-red-jacket-collar-stand-260nw-788734918.jpg"
            title="John Smith"
            subTitle="5 Listings"
            onPress={() => console.log("Pressed!")} // Fix this to properly handle the press
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
