import { Logo } from "../atom/Logo";
import {  Start } from "../tools/reducerControl";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";


export const Head = () => {
  //Another form for dispatch the store
  const distpatch=useDispatch()
  //Function which the web execute
  const click = () => {
    distpatch(Start());
  };

  return (
    <div className="head">
      <Box display="flex" flexDirection="row" gap={1}>
        <Logo width="80" action={click} />
      </Box>
    </div>
  );
};
