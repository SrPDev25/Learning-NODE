import {
    Card,
    CardActionArea,
    CardMedia,
    Typography,
    CardContent,
  } from "@mui/material";

  import { firstUpercase } from "../tools/tools";

/**
 *
 * @img the image url direction
 * @name the name of we will print, will been remove soon
 * @returns return the card with the info
 */
export function PokemonCard({ url: img, name }) {
    return (
      <div className="card">
        <Card sx={{ maxWidth: 160, maxHeight: 180 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="110"
              width="40"
              image={img}
              alt={firstUpercase(name)}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {firstUpercase(name)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
  



