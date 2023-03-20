import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
} from "@mui/material";
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
          
          <PokemonCardImg url={basicInfo.url} name={info.name}/>
          <hr style={{marginRight:"5px", marginLeft:"5px", border:"1px solid"}}/>
          <div style={{
            backgroundColor:"red",
            height:"40px",
            width:"100%"
          }}>
            
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}

{
  /* <CardActionArea>
            <CardMedia
              component="img"
              height="110"
              width="40"
              image={img}
              style={{height:'80px',}}
              alt={firstUpercase(name)}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {firstUpercase(name)}
              </Typography>
            </CardContent>
          </CardActionArea> */
}
