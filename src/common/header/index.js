import React from "react";
import { CSSTransition } from "react-transition-group";
// import store from '../../store/index';
import { connect } from "react-redux";
import { getHeaderOnFocus, getHeaderOnBlur } from "./store/actionCreators";
import {actionCreators} from './store/index'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";
const Header = props => {
  return (
    <HeaderWrapper>
      <Logo href="/" />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">
          <span className="iconfont">&#xe636;</span>
        </NavItem>
        <NavItem className="right">登录</NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focus} classNames="slide" timeout={200}>
            <NavSearch
              className={props.focus ? "focused" : ""}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <span className={props.focus ? "focused iconfont" : "iconfont"}>
            &#xe60b;
          </span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="reg">注册</Button>
        <Button className="write">
          <span className="iconfont">&#xe62d;</span>
          写文章
        </Button>
      </Addition>
    </HeaderWrapper>
  );
};

const mapStateToProps = state => {
  return {
    focus: state.header.focus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getHeaderOnFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.getHeaderOnBlur());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
