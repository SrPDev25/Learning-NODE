import { Box } from "@mui/material";
import { PokemonContentText } from "../atom/contentText";

/**Check if the pokemon have 0,1 or 2 min moves */
const checkMoves = (moves) => {
  const size = moves.length;
  let cont = [];
  if (size > 1) cont = moves.slice(0, 2);
  else if (size === 1) cont = moves.slice(0, 1);
  return cont;
};

export const MovesBundle = (props) => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent="center"
        gap={1}
        marginTop="5px"
        marginBottom="5px"
      >
        {checkMoves(props.moves).map((move, index) => {
          return (
            <PokemonContentText
              text={move.move.name}
              key={index}
              color="yellow"
            />
          );
        })}
      </Box>
    </>
  );
};
