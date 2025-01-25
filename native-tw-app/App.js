import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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
      <View className="flex-1 items-center justify-center">
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
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
