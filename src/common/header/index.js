import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
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
class Header extends Component {
  // state = {  }
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  render() {
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
            <CSSTransition in={this.state.focus} classNames="slide" timeout={200}>
              <NavSearch
                className={this.state.focus ? "focused" : ""}
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              />
            </CSSTransition>
            <span
              className={this.state.focus ? "focused iconfont" : "iconfont"}
            >
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
  }
  handleInputFocus() {
    this.setState({
      focus: true
    });
  }
  handleInputBlur() {
    this.setState({
      focus: false
    });
  }
}

export default Header;
