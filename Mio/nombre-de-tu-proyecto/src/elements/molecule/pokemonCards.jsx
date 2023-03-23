import {
  Card,
  CardActionArea,
} from "@mui/material";
import { CardTitlePokemon } from "../atom/cardTitlePokemon";
import { PokemonCardImg } from "../atom/pokemonCardImg";

import { firstUpercase } from "../tools/tools";

/**
 *
 * @img the image url direction
 * @name the name of we will print, will been remove soon
 * @returns return the card with the info
 */
export function PokemonCard({ info }) {
    const basicInfo=info.info
  return (
    <div className="card">
      <Card sx={{ maxWidth: 160, maxHeight: 180 }}>
        <CardActionArea>
          
          <PokemonCardImg url={basicInfo.sprites} name={info.name}/>
          <hr style={{marginRight:"5px", marginLeft:"5px", border:"1px solid"}}/>
          <div style={{
            backgroundColor:"red",
            height:"40px",
            width:"100%"
          }}>
            <CardTitlePokemon title={firstUpercase(info.name)}/>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}

