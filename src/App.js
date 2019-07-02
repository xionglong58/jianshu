import React, { Fragment } from "react";
import { GlobalStyle } from "./style";
import Header from "./common/header/index";
import { GlobalIconfont } from "./static/iconfont/iconfont";
import store from './store/index'
import {Provider} from 'react-redux'
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalIconfont />
      <Provider store={store}>
      <Header />
      </Provider>
    </Fragment>
  );
};

export default App;
