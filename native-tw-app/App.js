import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import "./global.css"; // Ensure this file is properly set up and imported

export default function App() {
  // Initial colors for the Text elements
  const [colors, setColors] = useState([
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-400",
  ]);

  // Function to cycle the colors every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setColors((prevColors) => [
        prevColors[3], // Red moves to the first position
        prevColors[0], // Blue moves to the second position
        prevColors[1], // Green moves to the third position
        prevColors[2], // Yellow moves to the fourth position
      ]);
    }, 2000); // Update every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-blue-200">
      <StatusBar animated={true} backgroundColor="#61dafb" />
      <View className="flex-1 items-center justify-center">
        {/* <Image source={require("./assets/favicon.png")} /> */}
        <Text
          className="text-orange-400 bg-white p-3"
          title="Click Me"
          onPress={() => {
            Alert.prompt("Title", "Subtitle", (text) =>
              console.log("You entered " + text)
            );
            // Alert.alert("Alert!", "My message", [
            //   {
            //     text: "Yes",
            //     onPress: () => {
            //       console.log("Yes");
            //     },
            //   },
            //   {
            //     text: "No",
            //     onPress: () => {
            //       console.log("No");
            //     },
            //   },
            // ]);
            // Alert.alert("Alert!");
            // alert("Button Pressed!");
            // console.log("Button Pressed!");
          }}
        >
          Click Me!
        </Text>
        <TouchableWithoutFeedback onPress={() => console.log("Image Pressed!")}>
          <Image
            fadeDuration={10000}
            blurRadius={1}
            source={{
              height: 200,
              width: 300,
              uri: "https://picsum.photos/200/300",
            }}
          />
        </TouchableWithoutFeedback>
        <Text className={`${colors[0]} w-screen text-center`}>
          Open up App.js to start working on your app!
        </Text>
        <Text className={`${colors[1]} w-screen text-center`}>
          Open up App.js to start working on your app!
        </Text>
        <Text className={`${colors[2]} w-screen text-center`}>
          Open up App.js to start working on your app!
        </Text>
        <Text className={`${colors[3]} w-screen text-center`}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    </SafeAreaView>
  );
}
