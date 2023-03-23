import { Box, Card, CardActionArea } from "@mui/material";
import { CardTitlePokemon } from "../atom/cardTitlePokemon";
import { Line } from "../atom/lines";
import { PokemonContentText } from "../atom/MoveText";
import { PokemonCardImg } from "../atom/pokemonCardImg";

import { firstUpercase } from "../tools/tools";

/**
 *
 * @img the image url direction
 * @name the name of we will print, will been remove soon
 * @returns return the card with the info
 */
export function PokemonCard({ info }) {
  const basicInfo = info.info;
  return (
    <div className="card">
      <Card sx={{ maxWidth: 450 }}>
        <CardActionArea style={{ border: "2px dotted black" }}>
          <PokemonCardImg url={basicInfo.sprites} name={info.name} />
          <Line type="long" />
          {/*Contenido pokemon*/}
          <div
            style={{
              width: "100%",
            }}
          >
            <CardTitlePokemon title={firstUpercase(info.name)} fontSize="20" />
            <Line type="short" />
            <CardTitlePokemon title="Moves" fontSize="13" />

            <Box display={"flex"} justifyContent="center" gap={1} marginTop="5px" marginBottom="5px">
              <PokemonContentText
                text={basicInfo.moves[0].move.name}
                color="yellow"
              />
              <PokemonContentText
                text={basicInfo.moves[1].move.name}
                color="yellow"
              />
            </Box>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}
