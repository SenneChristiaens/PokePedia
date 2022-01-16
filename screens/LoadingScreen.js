import React, { useEffect } from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Pokemons");
    }, 5450);
  }, []);

  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.bg}
        source={require("../assets/loadingscreen.jpeg")}
      >
        <Text style={styles.text}>PokePedia</Text>
        <Image
          style={styles.loadingicon}
          source={require("../assets/loadingicon.gif")}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#e65800",
    fontWeight: "900",
    top: 130,
    position: "absolute",
    alignSelf: "center",
    fontSize: 40,
  },
  theImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  loadingicon: {
    position: "absolute",
    alignSelf: "center",
    top: 560,
    height: 350,
    width: 350,
  },
});
export default LoadingScreen;
