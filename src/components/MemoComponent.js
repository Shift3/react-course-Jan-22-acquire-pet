import { useMemo, useState } from "react";

const fibonacci = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const Memo = () => {
  const [num, setNum] = useState(1);
  const fib = useMemo(() => fibonacci(num), [num]);
  return (
    <>
      <h1>useMemo hook example</h1>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>

      <button onClick={() => setNum(num + 1)}>+</button>
    </>
  );
};

export default Memo;
