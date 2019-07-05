import React, { Fragment } from "react";
import { GlobalStyle } from "./style";
import Header from "./common/header/index";
import { GlobalIconfont } from "./static/iconfont/iconfont";
import store from './store/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalIconfont />
      <Provider store={store}>
        <Fragment>
          <Header />
          <BrowserRouter>
            <Route path="/" exact render={() => <div>HOME</div>}></Route>
            <Route path="/route1" exact render={() => <div>Route1</div>}></Route>
          </BrowserRouter>
          <div style={{ height: '100px', backgroundColor: '#008080' }}>footer</div>
        </Fragment>
      </Provider>
    </Fragment >
  );
};

export default App;
