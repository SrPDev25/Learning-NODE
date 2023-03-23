import { configureStore } from "@reduxjs/toolkit";

//Const that you can use to know faster actions names
export const SetSiguiente = () => {
  return {
    type: "NEXT_SET",
  };
};
export const SetAnterior = () => {
  return {
    type: "LAST_SET",
  };
};
export const SetReset = () => {
  return {
    type: "RESET_SET",
  };
};
export const SetMaxSize = (maxSize) => {
  return {
    type: "MaxSize_Set",
    maxSize: maxSize,//in other cases with more than one value use an json
  };
};

const initialState = {
  set: 0,
  maxSize: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_SET":
      if (state.set <= state.maxSize - 10) {
        return {
          ...state,
          set: state.set + 10,
        };
      } else return state;
    case "LAST_SET":
      if (state.set > 0) {
        return {
          ...state,
          set: state.set - 10,
        };
      } else {
        return { ...state, set: 0 };
      }
    case "RESET_SET":
      return {
        ...state,
        set: 0,
      };
    case "MaxSize_Set":
      return {
        ...state,
        maxSize: action.maxSize,
      };
    default:
      return state;
  }
};
export const store = configureStore({
  reducer: reducer,
});
