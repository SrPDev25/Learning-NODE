import { CardMedia } from "@mui/material";
import { makeStyles } from "@mui/styles";

/* import {makeStyles} from "@mui/styles" */

/**A function of MaterialUI to make a "css" item (dont found) */
const useStyle = makeStyles({
  root: {
    border: "1px dotted black",
    maxHeight: "70px",
    marginTop: "20px",
    marginLeft: "50%",
    marginBottom: "10px",
    transform: "translateX(-50%)",
  },

  img: {
    width: "100%",
    paddingTop: "2px",
    paddingBottom: "2px",
    objectFit: "contain",
    border: "2px solid transparent",
    marginTop: "50%",
    transform: "translateY(-60%)",
  },
});

export const PokemonCardImg = (data, name) => {
  /**You have to call the field in a parameter to use it */
  const classNames = useStyle();
  const alt = "Sprite de " + { name };

  return (
    <div className={classNames.root}>
      <CardMedia
        className={classNames.img}
        component="img"
        alt={alt}
        height="80"
        image={data.url ? data.url : "https://www.pokencyclopedia.info/sprites/misc/spr_substitute/art__substitute.png"}
      />
    </div>
  );
};
