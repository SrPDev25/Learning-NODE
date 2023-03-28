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
      <Box display="flex" alignItems="center" gap={5} justifyContent="center">
        <ButtonAction text="prev"  style={{flexShrink:"0"}} action={actionLast} />
        <RangeButtonText style={{flexShrink:"0"}}/>
        <ButtonAction text="next" style={{flexShrink:"0"}} action={actionNext} />
      </Box>
    </div>
  );
};
