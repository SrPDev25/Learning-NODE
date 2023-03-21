import { configureStore } from "@reduxjs/toolkit";

//Const that you can use to know faster actions names
export const SetSiguiente = "NEXT_SET";
export const SetAnterior = "LAST_SET";
export const SetReset = "RESET_SET";


const initialState = {
  set: 0,
  maxSize: 1000,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SetSiguiente:
      if (state.set <= state.maxSize - 10) {
        return {
          ...state,
          set: state.set + 10,
        };
      } else return state;
    case SetAnterior:
      if (state.set > 0) {
        return {
          ...state,
          set: state.set - 10,
        };
      } else {
        return { ...state, set: 0 };
      }
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
