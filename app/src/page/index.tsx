import React, { FC } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyle";
import { Main, Header } from "components/index";

const App: FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" render={() => <Main />} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
