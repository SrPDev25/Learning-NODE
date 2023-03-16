import { Grid } from "@mui/material";
import { PokemonCard } from "../components/pokemonCards";
import axios from "axios";
import { useEffect, useState } from "react";

//The size of the sets
const pokemonSetSize = 10;

/**For now, set the "constructor first, plz"
 *
 * @returns return the cardsElements
 */
export const LeftModule = () => {
  const [set, setSet] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  //hola chatGPt, un saludo
  //When the set change, recharge all the pokemons
  useEffect(() => {
    //pokedex is a promise, then, you have to use 
    pokedex(0)
      .then((value) => {
        console.log(value);
        setPokemons(value);
      })
      .catch((error) => console.log(error));
  }, [set]);//useEffect, recharge when set change

  return (
    <>
      <div className="left">
        <PokemonCardsBundle pokemons={pokemons} />
      </div>
    </>
  );
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

      const arrayPersona = Object.keys(response.data.results).map((key) => {
        return response.data.results[key];
      });

      //console.log(arrayPersona);
      return arrayPersona;
    })
    .catch((err) => {
      console.log(err);
    });

/**
 *
 * @url es la url de la api donde se localizan todos los datos internos del pokemon
 */
const pokemonBasicInfo = (url) =>
  axios.get(url).then((response) => {
    var info = {};

    info = {
      url: response.data.sprites.front_default,
      ability1: response.data.abilities[0].ability.name,
      ability2: response.data.abilities[1].ability.name,
      move1: response.data.moves[0].move.name,
      move2: response.data.moves[1].move.name,
    };

    return info;
  });
// Borrar
//No me queda claro si sirve para algo
/*   //The item Material UI request to found properly
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  })); */

const PokemonCardsBundle = (prop) => {
  return (
    <div className="cardsBundle">
      {/*Sparcing supose to be the card's separations, but didn't found as i expect, I edited the separation at the .css */}
      <Grid container rowSpacing={0} columnSpacing={0}>
        {prop.pokemons.map((pokemon) => {
          return (
            <Grid item xs={5} key={pokemon.name}>
              <PokemonCard name={pokemon.name} url={pokemon.info.url} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
