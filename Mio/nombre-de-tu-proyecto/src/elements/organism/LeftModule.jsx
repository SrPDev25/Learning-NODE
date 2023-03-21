import { Button } from "@mui/material";
import { SetSiguiente,store } from "../tools/reducerControl";
import {Gallery} from "../molecule/pokemonGallery";




export const LeftModule = () => {
  const actionNext=()=>{
    console.log({type: SetSiguiente})
    store.dispatch({type: SetSiguiente})
  }

  return (
    <>
      <div className="left">
        <Button variant="outlined" onClick={actionNext} style={{marginLeft:"50%",transform:"translateX(-50%)", marginTop:"30px"}} >Siguiente</Button>
        <Gallery/>{/*Upgrade: type="Pokemons" {Forma de logicamente indicar el set} */}
      </div>
    </>
  );
};


