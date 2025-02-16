import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: "100%",
    minWidth: "100%",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
    marginVertical: "50%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: "25%",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    paddingTop: 20,
    textTransform: "capitalize",
    fontSize: 16,
  },
});

export default styles;
