import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const PokemonDetails = (props) => {
  const [detailsPokemon, setDetailsPokemon] = useState({});

  const getDetailsPokemon = async () => {
    try {
      const response = await fetch(props.data, {
        method: "GET",
      });
      const json = await response.json();
      // console.log(json);
      setDetailsPokemon(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDetailsPokemon(); //toon pokemons bij begin scherm
  }, []);

  if (Object.keys(detailsPokemon).length > 0) {
    //checks if object has keys (is it empty or not ->> empty
    return (
      <View>
        <View>
          <Image
            style={styles.picture}
            source={{ uri: detailsPokemon.sprites.front_default }}
          />
        </View>

        <View style={styles.details}>
          <View>
            <Text style={styles.h1}>{detailsPokemon.forms[0].name}</Text>
            <Text style={styles.h2}>Ability:</Text>
            <Text style={styles.p}>
              ⌁ {detailsPokemon.abilities[0].ability.name}
            </Text>
            <Text style={styles.h2}>Move: </Text>
            <Text style={styles.p}>⌁ {detailsPokemon.moves[0].move.name}</Text>
            <Text style={styles.p}>⌁ {detailsPokemon.moves[1].move.name}</Text>
            <Text style={styles.p}>⌁ {detailsPokemon.moves[2].move.name}</Text>
            <Text style={styles.p}>⌁ {detailsPokemon.moves[3].move.name}</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <ScrollView>
        <View style={styles.details}>
          <View></View>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  h1: {
    fontWeight: "900",
    color: "#85cabf",
    textTransform: "capitalize",
    margin: 16,
    fontSize: 32,
    textAlign: "center",
  },

  h2: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#85cabf",
  },

  p: {
    fontSize: 20,
    textTransform: "capitalize",
  },

  details: {
    top: -35,
    position: "absolute",
    width: 360,
    marginLeft: "5%",
    marginRight: "10%",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    borderRadius: 40,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 16,
    paddingBottom: 30,
    paddingLeft: 30,
    margin: 8,
  },

  picture: {
    position: "absolute",
    top: -378,
    width: "100%",
    height: 350,
  },

  release: {
    fontStyle: "italic",
    fontSize: 12,
    marginTop: 8,
    textAlign: "right",
  },
});
export default PokemonDetails;
