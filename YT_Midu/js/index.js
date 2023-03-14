//Reducer is a for which return a value from all the array
//const reducer =(state,action)=>newState

const counterReducer = (state, action) => {
  const { type } = action;
  if (type === "@counter/incremented") {
    return state + 1;
  }

  if (type === "@counter/decremented") return state - 1;
};
//Se crea la store y de paso le le añade un reduce
const store=createStore(counterReducer)

const actionIncrementer = (state, action) => {
  type: "@counter/incremented";
};
const actionDecrementer = (state, action) => {
  type: "@counter/decremented";
};


