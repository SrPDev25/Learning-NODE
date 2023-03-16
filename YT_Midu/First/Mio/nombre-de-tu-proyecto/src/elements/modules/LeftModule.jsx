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
  const [pokemons, setPokemons] = useState([pokedex]);
  //When the set change, recharge all the pokemons
  useEffect(() => {
    //Not in use
    pokedex(set);
  }, [set]);

  return (
    <>
      <div className="left">
        <PokemonCardsBundle pokemons={pokemons} />
      </div>
    </>
  );
};

const pokedex = (set) =>
  axios
    //url
    .get("https://pokeapi.co/api/v2/pokemon", {
      //That param indicate which set we are using
      params: {
        offset: set,
        limit: pokemonSetSize,
      },
    })
    .then((response) => {
      //OnBuild
      for (var i = 0; i < pokemonSetSize; i++) {
        const poke = response.data.results[i];
        //Want to set the info i need into the json directly
        response.data.results[i] = {
          ...poke,
          info: pokemonBasicInfo(poke.url),
        };
        //console.log(response.data.results[i]);
      }
      console.log(response.data);
      return response.data;
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
      ...info,
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

const PokemonCardsBundle = ({pokemons}) => {
  return (
    <div className="cardsBundle">
      {/*Sparcing supose to be the card's separations, but didn't found as i expect, I edited the separation at the .css */}
      <Grid container rowSpacing={0} columnSpacing={0}>
        {pokemons.map((pokemon) => {
          console.log(pokemon)
          return (
            <Grid xs={5}>
              <PokemonCard name={"hola"} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
