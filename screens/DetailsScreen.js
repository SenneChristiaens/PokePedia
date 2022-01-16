import React from "react";
import { StyleSheet, View, Button } from "react-native";

import PokemonDetails from "../components/PokemonDetails";

const DetailsScreen = ({ route, navigation }) => {
  const { PokemonId } = route.params;

  return (
    <View style={styles.screen}>
      <PokemonDetails data={PokemonId} />
      <View style={styles.btn}>
        <Button
          title="Back to Pokemons"
          color="#fff"
          onPress={() => navigation.navigate("Pokemons")}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  btn: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#85cabf",
    alignSelf: "center",
    // marginBottom: 50,
    borderRadius: 100,
    paddingLeft: 40,
    paddingRight: 40,
  },
});
export default DetailsScreen;
