import {
    Card,
    CardActionArea,
    CardMedia,
    Typography,
    CardContent,
    Paper,
    styled,
  } from "@mui/material";


/**
 *
 * @url the image url direction
 * @name the name of we will print, will been remove soon
 * @returns return the card with the info
 */
export function PokemonCard({ url, name }) {
    return (
      <div className="card">
        <Card sx={{ maxWidth: 160, maxHeight: 180 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="110"
              width="40"
              image={url}
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
  



