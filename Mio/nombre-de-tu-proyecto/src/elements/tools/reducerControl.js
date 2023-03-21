import { configureStore } from "@reduxjs/toolkit";

//Const that you can use to know faster actions names
export const SetSiguiente = "NEXT_SET";
export const SetAnterior = "LAST_SET";
export const SetReset = "RESET_SET";

const initialState = {
  set: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SetSiguiente:
      return {
        ...state,
        set: state.set + 10,
      };
    case SetAnterior:
      return {
        ...state,
        set: state.set - 10,
      };
    case SetReset:
      return {
        ...state,
        set: 0,
      };
    default:
      return state;
  }
};
export const store = configureStore({
  reducer: reducer,
});
