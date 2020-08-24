import React, { FC } from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import GlobalStyle from "../styles/GlobalStyle";
import { Main, Header, NotFoundPage } from "components/index";

const App: FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={["/", "/t/:email"]} render={() => <Main />} exact />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default hot(App);
