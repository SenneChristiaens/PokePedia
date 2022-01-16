import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PokemonItem = (props) => {
  // console.log(props)
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => props.onSelectPokemon(props.url)}
    >
      <View style={styles.listItem}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
  },

  text: {
    textTransform: "capitalize",
    fontWeight: "900",
    color: "white",
    textAlign: "center",
    fontSize: 18,
    letterSpacing: 1,
  },
});
export default PokemonItem;
