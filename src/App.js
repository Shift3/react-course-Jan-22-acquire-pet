import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Search";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <Router>
        <h1>Acquire new Pet</h1>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
