import React from "react";
import PropTypes from "prop-types";
import { FlatList, View } from "react-native";
import ListItem from "../../components/lists/ListItem";
import ListItemSeparator from "../../components/lists/ListItem/ListItemSeparator";
import ListItemDeleteAction from "../../components/lists/ListItem/ListItemDeleteAction";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 4,
    title: "T4",
    description: "D4",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 5,
    title: "T5",
    description: "D5",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 6,
    title: "T6",
    description: "D6",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 7,
    title: "T7",
    description: "D7",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 8,
    title: "T8",
    description: "D8",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 9,
    title: "T9",
    description: "D9",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 10,
    title: "T10",
    description: "D10",
    image: require("../assets/mosh.jpg"),
  },
];

const MessagesScreen = ({ title, subTitle, image, source }) => {
  return (
    <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
          onPress={() => console.log("Message selected: ", item.id)}
        />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
};

MessagesScreen.propTypes = {};

export default MessagesScreen;
