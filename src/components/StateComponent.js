import { useState } from "react";

const StateComponent = () => {
  const [isBlue, setIsBlue] = useState(true);

  return (
    <>
      <h1 style={{ color: isBlue ? "green" : "blue" }}>
        Example of useState Hook
      </h1>
      <button onClick={() => setIsBlue(!isBlue)}>Change Color</button>
    </>
  );
};

export default StateComponent;
