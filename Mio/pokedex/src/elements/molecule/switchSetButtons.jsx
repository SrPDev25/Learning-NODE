import { Box } from "@mui/material";
import { ButtonAction } from "../atom/ButtonAction";
import { store } from "../tools/reducerControl";
import { SetAnterior, SetSiguiente } from "../tools/reducerControl";
import { RangeButtonText } from "../atom/rangeButtonText";

export const SwitchSetButtons = () => {
  //Buttons actions
  const actionNext = () => {
    store.dispatch(SetSiguiente());
  };

  const actionLast = () => {
    store.dispatch(SetAnterior());
  };

  return (
    <div className="alignCenterTransform">
      <Box display="flex" alignItems="center">
        <ButtonAction text="prev" action={actionLast} />
        <RangeButtonText/>
        <ButtonAction text="next" action={actionNext} />
      </Box>
    </div>
  );
};
