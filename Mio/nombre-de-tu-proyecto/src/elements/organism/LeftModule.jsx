import { Box} from "@mui/material";
import { SetAnterior, SetSiguiente } from "../tools/reducerControl";
import { Gallery } from "../molecule/pokemonGallery";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { store } from "../tools/reducerControl";
import { ButtonAction } from "../atom/ButtonAction";

export const LeftModule = () => {
  //Buttons actions
  const actionNext = () => {
    store.dispatch(SetSiguiente());
  };

  const actionLast = () => {
    store.dispatch(SetAnterior());
  };

  //Control the numbers
  const [set, setSet] = useState(0);
  const data = useSelector((state) => state);
  useEffect(() => {
    setSet(data.set);
  }, [data]);
  const RangeButtonText = () => {
    const minRange = set + 1;
    let maxRange = set + 10;
    //Check for no overpass maxSize range
    if (maxRange > data.maxSize) maxRange = data.maxSize;

    return (
      <p style={{fontSize:"20px", transform:"translateY(60%)"}}>
        {minRange}-{maxRange}/{data.maxSize}
      </p>
    );
  };
  return (
    <>
      
        <Box display="flex" alignItems="center" className="buttonBox">
          <ButtonAction text='prev' action={actionLast}/>
          <RangeButtonText />
          <ButtonAction text='next' action={actionNext}/>
        </Box>
        <div className="left">
        <Gallery />
        {/*Upgrade: type="Pokemons" {Forma de logicamente indicar el set} */}
      </div>
    </>
  );
};
