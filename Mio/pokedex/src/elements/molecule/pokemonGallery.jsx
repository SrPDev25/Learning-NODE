import { Grid } from "@mui/material";
import { PokemonCard } from "./pokemonCards";
import { pokedex } from "../tools/pokemonsApiControl.ts";
import { useEffect, useState } from "react";
import { store, SetMaxSize } from "../tools/reducerControl";
import { useSelector } from "react-redux";
import axios from "axios";

export const Gallery = () => {
  const set = useSelector((state) => state.set);
  const [pokemons, setPokemons] = useState([]);
  //When the set change, recharge all the pokemons
  useEffect(() => {
    //pokedex is a promise, then, you have to use
    pokedex(set)
      .then((value) => {
        setPokemons(value);
      })
      .catch((error) => console.log(error));
  }, [set]); //useEffect, recharge when set change

  //Charge at the general load the max size of the api info
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon", {
        params: {
          offset: set,
          limit: 10,
        },
      })
      .then((response) => {
        //set the new max size
        store.dispatch(SetMaxSize(response.data.count));
      }).catch((error)=>console.log(error));
      //store.dispatch({ ...state, maxSize: });
      
  });

  return <PokemonCardsBundle pokemons={pokemons} />;
};


export const PokemonCardsBundle = (prop) => {
  return (
    <div className="cardsBundle">
      {/*Sparcing supose to be the card's separations, but didn't found as i expect, I edited the separation at the .css */}
      <Grid container rowSpacing={0} columnSpacing={0}>
        {/*Pokemons (array) can be mapped. While 'foreach' cannot return elements, 'map' can.*/}
        {prop.pokemons.map((pokemon) => {
          return (
            <Grid item xs={5} key={pokemon.name}>
              <PokemonCard info={pokemon} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
