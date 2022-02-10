import { useContext, useState, createContext } from "react";

const UserContext = createContext([
  {
    firsName: "Elmehdi",
    lastName: "Aitbrahim",
    suffix: 1,
    email: "eaitbrahim@gmail.com",
  },
  (obj) => obj,
]);

const FifthComponent = () => {
  const [user, setUser] = useContext(UserContext);

  return (
    <>
      <h5>Fifth Component</h5>
      <span>{`${user.firstName} ${user.lastName} the ${user.suffix} born`}</span>
      <button
        onClick={() => {
          setUser({ ...user, suffix: ++user.suffix });
        }}
      >
        Increment
      </button>
    </>
  );
};
const ForthComponent = () => {
  return (
    <>
      <h4>Forth Component</h4>
      <FifthComponent />
    </>
  );
};

const ThirdComponent = () => {
  return (
    <>
      <h3>Third Component</h3>
      <ForthComponent />
    </>
  );
};

const SecondComponent = () => {
  return (
    <>
      <h2>Second Component</h2>
      <ThirdComponent />
    </>
  );
};
const ContextComponent = () => {
  const userState = useState({
    firstName: "Greg",
    lastName: "Huber",
    suffix: 1,
    email: "ghuber@gmail.com",
  });

  return (
    <UserContext.Provider value={userState}>
      <h1>useContext hook example</h1>
      <SecondComponent />
    </UserContext.Provider>
  );
};

export default ContextComponent;
