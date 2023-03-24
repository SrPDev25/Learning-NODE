import { Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Gallery } from "../molecule/pokemonGallery";
import { SwitchSetButtons } from "../molecule/switchSetButtons";
import { store } from "../tools/reducerControl";
import { useSelector } from "react-redux";

export const LeftModule = () => {

  const state = useSelector((state) =>state.initialize);

  //The content of the left module, which is visible once you click the pokeball
  const ContentComponent=()=>(<>
    <SwitchSetButtons />
    <Gallery />
  </>)

  return (
    <>
      <div className="left">
        {state===1 && <ContentComponent/>}
        {/*Upgrade: type="Pokemons" {Forma de logicamente indicar el set} */}
        {/*en el caso que fuese una página reutilizable */}
      </div>
    </>
  );
};
