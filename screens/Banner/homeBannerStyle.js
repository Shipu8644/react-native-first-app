import { StyleSheet, Dimensions } from "react-native";

const bannerStyle = StyleSheet.create({
  wrap: {
    borderRadius:5,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.25, 
  },
  wrapDot: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignSelf: "center",
  },
  dot: {
    margin: 3,
    color: "#888",
  },
  dotActive: {
    margin: 3,
    color: "white",
  }
});
export { bannerStyle };