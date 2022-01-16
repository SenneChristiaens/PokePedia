import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, TextInput } from "react-native";

import PokemonItem from "../components/PokemonItem";

const PokemonsScreen = ({ navigation }) => {
  const [pokemon, setPokemons] = useState([]);
  let filterarray = [];

  const getPokemons = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=400",
        {
          method: "GET",
        }
      );
      const json = await response.json();
      //console.log(json.results);
      setPokemons(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPokemons(); //toon pokemons bij begin scherm
  }, []);

  const GetPokemonsByTitleFilter = (input) => {
    if (input.length > 0) {
      // console.log(typeof input)
      for (let i = 0; i < pokemon.length; i++) {
        if (!pokemon[i]["name"].indexOf(input.toLowerCase())) {
          // console.log(filterarray)
          filterarray.push(pokemon[i]);
        }
      }
      setPokemons(filterarray);
    } else {
      getPokemons();
    }
  };

  return (
    <View style={styles.alles}>
      <View style={styles.screen}>
        <TextInput
          style={styles.input}
          placeholder="Search Pokémon"
          style={styles.input}
          onChangeText={GetPokemonsByTitleFilter} //geeft argument enteredText mee, denk aan de goalInputHandler uit de goal app.
        />
        <FlatList
          style={styles.flatlist}
          data={pokemon}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <PokemonItem
                name={item.name}
                url={item.url}
                onSelectPokemon={() => {
                  navigation.navigate("Details", { PokemonId: item.url });
                }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "#85cabf",
  },

  item: {
    backgroundColor: "#91cfc5",
    borderRadius: 100,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  flatlist: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20,
    marginBottom: 100,
    height: "100%",
  },

  input: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 100,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
export default PokemonsScreen;
