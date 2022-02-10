import { useCallback, useState, useEffect, memo } from "react";

const EpensiveComputationComponent = memo(({ compute, count }) => {
  return (
    <div>
      <h1>compute: {compute(count)}</h1>
      <span>last re-render {new Date().toLocaleTimeString()}</span>
    </div>
  );
});

const Callback = () => {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => new Date(), 1000);
    return () => clearTimeout(timer);
  });

  const fibonacci = (n) => {
    if (n <= 1) {
      return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  };

  return (
    <>
      <h1>useCallback hook example {time.toLocaleTimeString()}</h1>
      <button onClick={() => setCount(count + 1)}>
        Current count: {count}
      </button>

      <EpensiveComputationComponent
        compute={useCallback(fibonacci, [])}
        count={count}
      />
    </>
  );
};

export default Callback;
