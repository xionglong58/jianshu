import styled from "styled-components";
import logo from "../../static/nav-logo.png";
import app from "../../static/download-apps.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 2px solid #f0f0f0;
  min-width: 1080px;
`;
export const Logo = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  display: inline-block;
  height: 56px;
  width: 100px;
  background: url(${logo});
  background-size: contain;
  cursor: pointer;
`;
export const Nav = styled.div`
  width: 50%;
  height: 56px;
  margin-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
  span {
    font-size: 17px;
  }
`;

export const NavItem = styled.div`
  font-size: 17px;
  line-height: 56px;
  color: #333333;
  padding: 0 15px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #e76d5d;
  }
  cursor: pointer;
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  line-height: 36px;
  height: 36px;
  margin-top: 10px;
  height: 36px;
  .zoom {
    position: absolute;
    right: 6px;
    bottom: 1px;
    text-align: center;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    /* background:#f1f2f3; */
    border: none;
    &.focused {
      background: #7c7c7c;
    }
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  z-index: 10;
  left: 0px;
  top: 40px;
  margin-top: 9px;
  padding-bottom: 9px;
  // height: 200px;
  width: 220px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  div {
    font-size: 14px;
    margin-top: 20px;
    margin-left: 10px;
    &.info {
      margin: 20px;
    }
  }
  span {
    float: right;
    font-size: 13px;
    margin-right: 10px;
    cursor: pointer;
  }
  div li {
    list-style: none;
    line-height: 20px;
    float: left;
    display: inline;
    padding: 2px 4px;
    border-radius: 3px;
    font-size: 12px;
    margin-right: 15px;
    margin-top: 10px;
    border: 1px solid #969696;
  }
  .spin {
    dispaly: block;
    transition: all 0.4s ease-in;
    transform-origin: center center;
    transform: rotate(90deg);
  }
  a {
    color: #969696;
    text-decoration: none;
  }
  a:link,
  a:visited,
  a:focus,
  a:hover {
    color: #2f2f2f;
    text-decoration: none;
  }
  a:active,
  a:hover {
    outline: 0;
  }
`;

export const NavSearch = styled.input.attrs({ placeholder: "搜索" })`
  width: 178px;
  height: 36px;
  box-sizing: border-box;
  border-radius: 18px;
  border: none;
  padding: 0 36px 0 20px;
  background: #eee;
  font-size: 15px;
  &.focused {
    width: 220px;
  }
  &.slide-enter {
    width: 178px;
    transition: all 0.2s ease-out;
  }
  &.slide-enter-active {
    width: 220px;
  }
  &.slide-exit {
    transition: all 0.2s ease-out;
  }
  &.slide-exit-active {
    width: 178px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;
export const Button = styled.button`
  height: 36px;
  line-height: 36px;
  border-radius: 18px;
  font-size: 15px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0px 20px;
  border: 1px solid #e85f4d;
  &.write {
    background: #e85f4d;
    color: #fff;
  }
  &.reg {
    background: none;
    color: #f2a197;
  }
  cursor: pointer;
`;
export const AppWrapper = styled.div`
  height: 600px;
  width: 600px;
  position:fixed;
  background-color:#eeeeee;
  border:1px solid rgb(225,225,225);
  border-radius:5px;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  z-index:10;
  box-shadow:10px 10px 5px rgb(225,225,225);
.iconfont{
  float:right;
  margin:0px 10px;
  color:#e45d51;
  cursor:pointer;
}
`;
export const AppPic = styled.div`
  height: 600px;
  width: 600px;
  background: url(${app});
  background-size: 200px 200px;
  background-repeat: no-repeat;
  background-position: center center;
`;
