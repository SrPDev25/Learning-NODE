import { Logo } from "../atom/Logo";
import { Start } from "../tools/reducerControl";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BigContainer } from "../atom/BigContainer";

export const Head = () => {
  //Another form for dispatch the store
  const distpatch = useDispatch();
  //Function which the web execute
  const click = () => {
    distpatch(Start());
  };
  const initialized=useSelector((state)=>state.initialize)
  

  return (
    <div className="head">
      <Box display="flex" gap={1}>
        <Logo width="80" action={click} style={{ flex: "8" }} />
        {initialized===0 && <BigContainer text="&#8592; Click aquí para empezar"/>}
      </Box>
    </div>
  );
};
