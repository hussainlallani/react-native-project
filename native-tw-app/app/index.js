import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "../global.css";
import Welcome from "./screens/Welcome";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <Welcome />
    </View>
  );
}
