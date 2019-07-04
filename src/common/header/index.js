import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
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
    const { list, mouseEnter, page, totalPage, hanlleMouseEnter, hanlleMouseLeave ,handleChangePage} = this.props;
    const newList=list.toJS()
    const pageList=[];
    for(let i=(page-1)*10;i<page*10;i++){
      pageList.push(
        <li><a href="#">{newList[i]}</a></li>
      )
    }
    if (infoFocus || mouseEnter) {
      return (
        <SearchInfo onMouseEnter={hanlleMouseEnter} onMouseLeave={hanlleMouseLeave}>
          <div>
            热门搜索
            <span onClick={handleChangePage(page,totalPage)}>换一批</span>
          </div>
          <div className="info">
            {pageList}
          </div>
        </SearchInfo>
      );
    }
    return null;
  }
  render() {
    const { focus, handleInputFocus, handleInputBlur } = this.props;
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
    focus: state.getIn(['header', 'focus']),
    mouseEnter: state.getIn(['header', 'mouseEnter']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    list: state.getIn(['header', 'list'])
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
    },
    hanlleMouseEnter() {
      dispatch(actionCreators.getMouseEnterAction())
    },
    hanlleMouseLeave() {
      dispatch(actionCreators.getMouseLeaveAction())
    },
    handleChangePage(page,totalPage){
      dispatch(actionCreators.getChangePage(page))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
