import axios from "axios";

export const pokedex = (set) =>
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
        limit: 10,
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
    interface info{
        url:string;
        ability1?:string;
        ability2?:string;
        move1?:string;
        move2?:string;
    }

    info = {
      url: response.data.sprites.front_default,
      ability1: response.data.abilities[0].ability.name,
      ability2: response.data.abilities[1].ability.name,
      move1: response.data.moves[0].move.name,
      move2: response.data.moves[1].move.name,
    };

    return info;
  });