import React, { Fragment } from "react";
import { GlobalStyle } from "./style";
import Header from "./common/header/index";
import { GlobalIconfont } from "./static/iconfont/iconfont";
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalIconfont />
      <Header />
    </Fragment>
  );
};

export default App;
