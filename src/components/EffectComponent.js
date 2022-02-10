import { useState, useEffect } from "react";

const EffectComponent = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(new Date());
      return () => clearTimeout(timer);
    }, 1000);
  }, [time]);
  return (
    <>
      <h1>useEffect hook Example</h1>
      <span>{time.toLocaleString()}</span>
    </>
  );
};

export default EffectComponent;
