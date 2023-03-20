import { Grid } from "@mui/material";
import { PokemonCard } from "./pokemonCards";
import axios from "axios";
import { useEffect, useState } from "react";
import {useSelector} from 'react-redux'

//The size of the sets
const pokemonSetSize = 10;

export const Gallery = () => {
  const set = useSelector((state) => state.set);
  const [pokemons, setPokemons] = useState([]);
  //hola chatGPt, un saludo
  //When the set change, recharge all the pokemons
  useEffect(() => {
    //pokedex is a promise, then, you have to use
    pokedex(set)
      .then((value) => {
        setPokemons(value);
      })
      .catch((error) => console.log(error));
  }, [set]); //useEffect, recharge when set change

  return <PokemonCardsBundle pokemons={pokemons}/>
};

const pokedex = (set) =>
  /**
   * All the axio and fetch http petitions, return a promise.
   * If the http petitions is slow, with the promiese the request will be in line
   */
  axios
    //url
    .get("https://pokeapi.co/api/v2/pokemon", {
      //That param indicate which set we are using
      params: {
        offset: set,
        limit: pokemonSetSize,
      },
    })
    //Made async the action of the promise
    .then(async (response) => {
      //with this, the promise can be referenced
      const promises = response.data.results.map((poke, index) =>
        //Want to set the info i need into the json directly
        pokemonBasicInfo(poke.url)
          .then((info) => {
            response.data.results[index] = {
              ...poke,
              info,
            };
          })
          .catch((error) => console.log(error))
      );
      //that made wait the function's return until the promises in Promise.all are finisheds
      await Promise.all(promises);

      const arrayPokemones = Object.keys(response.data.results).map((key) => {
        return response.data.results[key];
      });
      return arrayPokemones;
    })
    .catch((err) => {
      console.log(err);
    });

/**
 * @url the url where the pokemon's info are
 */
const pokemonBasicInfo = (url) =>
  //Http call with axio
  axios.get(url).then((response) => {
    //taking all the basic info I want
    const info = {
      url: response.data.sprites.front_default,
      ability1: response.data.abilities[0].ability.name,
      ability2: response.data.abilities[1].ability.name,
      move1: response.data.moves[0].move.name,
      move2: response.data.moves[1].move.name,
    };

    return info;
  });

export const PokemonCardsBundle = (prop) => {
  return (
    <div className="cardsBundle">
      {/*Sparcing supose to be the card's separations, but didn't found as i expect, I edited the separation at the .css */}
      <Grid container rowSpacing={0} columnSpacing={0}>
        {/*Pokemons (array) can be mapped. While 'foreach' cannot return elements, 'map' can.*/}
        {prop.pokemons.map((pokemon) => {
          return (
            <Grid item xs={5} key={pokemon.name}>
              <PokemonCard info={pokemon}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
