import { useReducer } from "react";

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
const step = 50;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_RED":
      return Object.assign({}, state, { red: limitRGB(state.red + step) });
    case "DECREMENT_RED":
      return Object.assign({}, state, { red: limitRGB(state.red - step) });
    case "INCREMENT_GREEN":
      return Object.assign({}, state, { green: limitRGB(state.green + step) });
    case "DECREMENT_GREEN":
      return Object.assign({}, state, { green: limitRGB(state.green - step) });
    case "INCREMENT_BLUE":
      return Object.assign({}, state, { blue: limitRGB(state.blue + step) });
    case "DECREMENT_BLUE":
      return Object.assign({}, state, { blue: limitRGB(state.blue - step) });
    default:
      return state;
  }
};

const Reducer = () => {
  const [{ red, green, blue }, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });
  return (
    <>
      <h1 style={{ color: `rgb(${red}, ${green}, ${blue})` }}>
        useReducer hook example
      </h1>

      <div>
        <span>Red</span>
        <button onClick={() => dispatch({ type: "INCREMENT_RED" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT_RED" })}>-</button>
      </div>

      <div>
        <span>Green</span>
        <button onClick={() => dispatch({ type: "INCREMENT_GREEN" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT_GREEN" })}>-</button>
      </div>

      <div>
        <span>Blue</span>
        <button onClick={() => dispatch({ type: "INCREMENT_BLUE" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT_BLUE" })}>-</button>
      </div>
    </>
  );
};

export default Reducer;
