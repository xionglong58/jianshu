import React, { Fragment } from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyle } from "./style";
import Header from "./common/header/index";
import { GlobalIconfont } from "./static/iconfont/iconfont";
import store from './store/index';
import Home from './pages/home';
import Detail from './pages/detail';
import MockTest from './mock';
const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <GlobalIconfont />
      <Provider store={store}>
        <Fragment>
          <Header />
          <BrowserRouter>
            <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
          </BrowserRouter>
          <div style={{ height: '100px', backgroundColor: '#008080' }}>footer</div>
        </Fragment>
      </Provider>
      <MockTest/>
    </Fragment >
      );
    };
    
    export default App;
