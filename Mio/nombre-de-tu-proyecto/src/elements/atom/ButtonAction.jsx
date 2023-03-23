import { Button } from "@mui/material"
import { store } from "../tools/reducerControl";

//Buttons actions


export const ButtonAction=(data)=>{
    
    return <Button
    variant="contained"
    onClick={data.action}
    style={{
        marginTop: "30px",
        height:"28px",
        minWidth:"40px",
        width:"50px",
        fontSize:"14px",
        color:"black",
        background:"rgb(177, 228, 229)"
      }}
  >
    {data.text}
  </Button>
}