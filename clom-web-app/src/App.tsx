import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import AppLayout from "./layouts/AppLayout";
import Home from "./views/public/Home";

const App: React.FunctionComponent = () => {
  return <BrowserRouter>
    <AppLayout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </AppLayout>
  </BrowserRouter>
}

export default App;