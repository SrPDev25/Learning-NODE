import { Container } from "@mui/material";
import { Gallery } from "../molecule/pokemonGallery";
import { SwitchSetButtons } from "../molecule/switchSetButtons";

export const LeftModule = () => {
  

  return (
    <>
      <div className="left">
        <SwitchSetButtons/>
        <Gallery />
        {/*Upgrade: type="Pokemons" {Forma de logicamente indicar el set} */}{/*en el caso que fuese una página reutilizable */}
      </div>
    </>
  );
};
