import { useState, StrictMode, lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const StateComponent = lazy(() => import("./components/StateComponent"));
const EffectComponent = lazy(() => import("./components/EffectComponent"));
const ContextComponent = lazy(() => import("./components/ContextComponent"));
const RefComponent = lazy(() => import("./components/RefComponent"));
const ReducerComponent = lazy(() => import("./components/ReducerComponent"));
const MemoComponent = lazy(() => import("./components/MemoComponent"));
const CallbackComponent = lazy(() => import("./components/CallbackComponent"));
const Details = lazy(() => import("./Details"));
const Search = lazy(() => import("./Search"));

const App = () => {
  const theme = useState("blue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Suspense fallback="<h1>loading route...</h1>">
          <Router>
            <header style={{ textAlign: "center", marginBottom: "5rem" }}>
              <Link style={{ textDecoration: "none", color: "red" }} to="/">
                <h1>Acquire new Pet</h1>
              </Link>
            </header>
            <Switch>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/state">
                <StateComponent />
              </Route>
              <Route path="/effect">
                <EffectComponent />
              </Route>
              <Route path="/context">
                <ContextComponent />
              </Route>
              <Route path="/ref">
                <RefComponent />
              </Route>
              <Route path="/reducer">
                <ReducerComponent />
              </Route>
              <Route path="/memo">
                <MemoComponent />
              </Route>
              <Route path="/callback">
                <CallbackComponent />
              </Route>
              <Route path="/">
                <Search />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
