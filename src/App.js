import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "./style";
import Header from "./common/header/index";
import { GlobalIconfont } from "./static/iconfont/iconfont";
import store from "./store/index";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable";
import { MockJsonData } from "./mock";
import Login from "./pages/login";
const App = () => {
  return (
    <Fragment>
      <MockJsonData />
      <GlobalStyle />
      <GlobalIconfont />
      <Provider store={store}>
        <Fragment>
          <BrowserRouter>
            <Header />
            <Route path="/" exact component={Home} />
            <Route path="/detail/:id" exact component={Detail} />
            <Route path="/login" exact component={Login} />
          </BrowserRouter>
          {/* <div style={{ height: '100px', backgroundColor: '#008080' }}>footer</div> */}
        </Fragment>
      </Provider>
    </Fragment>
  );
};

export default App;
