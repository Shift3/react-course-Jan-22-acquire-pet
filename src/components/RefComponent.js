import { useState, useRef } from "react";

const RefComponent = () => {
  const [stateNumber, setStateNumer] = useState(0);
  const numRef = useRef(0);

  const incrementAndDelayLogging = () => {
    setStateNumer(stateNumber + 1);
    numRef.current++;

    setTimeout(() => {
      alert(`state: ${stateNumber} | ref: ${numRef.current}`);
    }, 1000);
  };
  return (
    <>
      <h1>useRef hook example</h1>
      <button onClick={incrementAndDelayLogging}>Delay logging</button>
      <h4>state: {stateNumber}</h4>
      <h4>ref: {numRef.current}</h4>
    </>
  );
};

export default RefComponent;
