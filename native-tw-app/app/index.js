import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
import Welcome from "./screens/Welcome";
import ViewImageScreen from "./screens/ViewImageScreen";
import ListingsScreen from "./screens/ListingsScreen";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import MessagesScreen from "./screens/MessagesScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        {/* <Welcome /> */}
        {/* <ViewImageScreen /> */}
        {/* {<ListingsScreen />} */}
        {/* <ListingDetailsScreen /> */}
        <MessagesScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
