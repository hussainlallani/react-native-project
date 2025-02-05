import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "../global.css";
import Welcome from "./screens/Welcome";
import ViewImageScreen from "./screens/ViewImageScreen";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/* <Welcome /> */}
      <ViewImageScreen />
    </View>
  );
}
