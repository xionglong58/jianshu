import styled from "styled-components";
import logo from "../../static/nav-logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  /* background: red; */
  border-bottom: 2px solid #f0f0f0;
  min-width: 1080px;
`;
export const Logo = styled.a`
  position: absolute;
  left: 0px;
  top: 0px;
  display: inline-block;
  height: 56px;
  width: 100px;
  background: url(${logo});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 50%;
  height: 56px;
  /* background:red; */

  margin-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
  span{
    font-size:17px;
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
`;
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  line-height:36px;
  height:36px;
  margin-top:10px;
  height:36px; 
  .iconfont {
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
    &.focused{
      background:#7c7c7c;
    }
  }
  .slide-enter{
    width:178px;
    transition:all 0.2s ease-out;
  }
  .slide-enter-active{
    width:420px;
  }
  .slide-exit{
    transition:all 0.2s ease-out;
  }
  .slide-exit-active{
    width:178px;
  }
`;

export const NavSearch = styled.input.attrs({ placeholder: "搜索" })`
  width: 178px;
  height: 36px;
  box-sizing: border-box;
  border-radius: 18px;
  /* margin-top: 10px; */
  border: none;
  padding: 0 36px 0 20px;
  background: #eee;
  font-size: 15px;
  &.focused{
    width:220px;
  }
`;
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
  /* background:red; */
`;
export const Button = styled.button`
  /* float: right; */
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
`;
