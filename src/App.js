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
import Write from './pages/write';
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
            <Route path="/jianshu" exact component={Home} />
            <Route path="/jianshu/detail/:id" exact component={Detail} />
            <Route path="/jianshu/login" exact component={Login} />
            <Route path="/jianshu/write" exact component={Write} />

          </BrowserRouter>
          {/* <div style={{ height: '100px', backgroundColor: '#008080' }}>footer</div> */}
        </Fragment>
      </Provider>
    </Fragment>
  );
};

export default App;
