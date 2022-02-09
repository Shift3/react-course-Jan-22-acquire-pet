import { useState, StrictMode } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Search from "./Search";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import StateComponent from "./components/StateComponent";
import EffectComponent from "./components/EffectComponent";
import ContextComponent from "./components/ContextComponent";
import RefComponent from "./components/RefComponent";
import ReducerComponent from "./components/ReducerComponent";
const App = () => {
  const theme = useState("blue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
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
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </Router>
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
