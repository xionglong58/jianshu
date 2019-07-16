import React, { PureComponent } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { actionCreators } from "./store/index";
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from "react-router-dom";
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

class Header extends PureComponent {
  showListArea(infoFocus) {
    const {
      list,
      mouseEnter,
      page,
      totalPage,
      hanlleMouseEnter,
      hanlleMouseLeave,
      handleChangePage
    } = this.props;
    const newList = list.toJS();
    const pageList = [];
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      if (i >= newList.length) {
        break;
      }
      pageList.push(
        <li key={newList[i]}>
          <a href="/">{newList[i]}</a>
        </li>
      );
    }
    if (infoFocus || mouseEnter) {
      return (
        <SearchInfo
          onMouseEnter={hanlleMouseEnter}
          onMouseLeave={hanlleMouseLeave}
        >
          <div>
            热门搜索
            <span
              onClick={() => handleChangePage(page, totalPage, this.iconSpin)}
            >
              <span
                className="iconfont spin"
                ref={spin => {
                  this.iconSpin = spin;
                }}
              >
                &#xe617;{" "}
              </span>
              <span>换一批</span>
            </span>
          </div>
          <div className="info">{pageList}</div>
        </SearchInfo>
      );
    }
    return null;
  }
  render() {
    const { focus, handleInputFocus, handleInputBlur, list, login } = this.props;
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>

          {!login ? <Link to='/login'><NavItem className="right">登录</NavItem></Link> : <NavItem className="right" onClick={this.props.logOut}>退出</NavItem>}

          <SearchWrapper>
            <CSSTransition in={focus} classNames="slide" timeout={200}>
              <NavSearch
                className={focus ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <span className={focus ? "focused iconfont zoom" : "iconfont zoom"}>
              &#xe60b;
            </span>
            {this.showListArea(focus)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Link to='/write'>
            <Button className="write">
              <span className="iconfont">&#xe62d;</span>
              写文章
            </Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    focus: state.getIn(["header", "focus"]),
    mouseEnter: state.getIn(["header", "mouseEnter"]),
    page: state.getIn(["header", "page"]),
    totalPage: state.getIn(["header", "totalPage"]),
    list: state.getIn(["header", "list"]),
    login: state.getIn(["login", "login"])
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
      dispatch(actionCreators.getHeaderOnFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.getHeaderOnBlur());
    },
    hanlleMouseEnter() {
      dispatch(actionCreators.getMouseEnterAction());
    },
    hanlleMouseLeave() {
      dispatch(actionCreators.getMouseLeaveAction());
    },
    handleChangePage(page, totalPage, iconSpin) {
      let originAngle = iconSpin.style.transform.replace(/[^0-9]/gi, "");
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      iconSpin.style.transform = "rotate(" + (originAngle + 360) + "deg)";
      if (page < totalPage) {
        dispatch(actionCreators.getChangePage(page + 1));
      } else {
        dispatch(actionCreators.getChangePage(1));
      }
    },
    logOut() {
      dispatch(loginActionCreators.getLoginOutAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
