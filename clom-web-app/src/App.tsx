import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./views/public/Home";

const App: React.FunctionComponent = () => {
  return <BrowserRouter>
    <header>HEADER</header>

    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>

    <footer>FOOTER</footer>
  </BrowserRouter>
}

export default App;