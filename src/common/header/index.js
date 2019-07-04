import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
// import store from '../../store/index';
import { connect } from "react-redux";
import { actionCreators } from "./store/index";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo
} from "./style";

class Header extends Component {
  showListArea(infoFocus) {
    const {list}=this.props;
    if (infoFocus) {
      return (
        <SearchInfo>
          <div>
            热门搜索
            <span>换一批</span>
          </div>
          <div className="info">
            {list.map(item =>{
              return <li key={item}><a href="#">{item}</a></li>
            })}
            {/* <li>
              <a href="#">金融日说</a>
            </li>
            <li>
              <a href="#">React-redux</a>
            </li>
            <li>
              <a href="#">CSS</a>
            </li>
            <li>
              <a href="#">React-immutable</a>
            </li>
            <li>
              <a href="#">Axios</a>
            </li>
            <li>
              <a href="#">Jquery</a>
            </li> */}
          </div>
        </SearchInfo>
      );
    }
    return null;
  }
  render() {
    const {focus,handleInputFocus,handleInputBlur}=this.props;
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
            <CSSTransition
              in={focus}
              classNames="slide"
              timeout={200}
            >
              <NavSearch
                className={focus ? "focused" : ""}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span
              className={focus ? "focused iconfont" : "iconfont"}
            >
              &#xe60b;
            </span>
            {this.showListArea(focus)}
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
}

const mapStateToProps = state => {
  return {
    focus: state.getIn(['header','focus']),
    list: state.getIn(['header','list'])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.getList());
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
