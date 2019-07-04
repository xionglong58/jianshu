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
      <div style={{height:'100px',backgroundColor: '#008080'}}>footer</div>
      </Provider>
    </Fragment>
  );
};

export default App;
