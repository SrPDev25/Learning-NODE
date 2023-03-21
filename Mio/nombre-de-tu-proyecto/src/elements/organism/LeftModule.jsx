import { Button } from "@mui/material";
import { SetAnterior, SetSiguiente,store } from "../tools/reducerControl";
import {Gallery} from "../molecule/pokemonGallery";




export const LeftModule = () => {
  const actionNext=()=>{
    store.dispatch({type: SetSiguiente})
  }

  const actionLast=()=>{
    store.dispatch({type: SetAnterior})
  }
  return (
    <>
      <div className="left">
        
      <Button variant="outlined" onClick={actionLast} style={{marginLeft:"50%",transform:"translateX(-50%)", marginTop:"30px"}} >Atrás</Button>
        <Button variant="outlined" onClick={actionNext} style={{marginLeft:"50%",transform:"translateX(-50%)", marginTop:"30px"}} >Siguiente</Button>
        <Gallery/>{/*Upgrade: type="Pokemons" {Forma de logicamente indicar el set} */}
      </div>
    </>
  );
};


