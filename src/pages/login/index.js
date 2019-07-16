import React, { PureComponent } from "react";
import { LoginInWrapper, LoginInBOx, Input, Buttton } from "./style";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import { actionCreators } from './store';
class Login extends PureComponent {
  render() {
    if (!this.props.loginStatus) {
      return (
        <LoginInWrapper>
          <LoginInBOx>
            <Input placeholder="账号" ref={(input) => { this.user = input }} />
            <span className="iconfont user">&#xe645;</span>
            <Input placeholder="密码" type="password" ref={(passwd) => { this.passwd = passwd }} />
            <span className="iconfont key">&#xe68b;</span>
            <Buttton onClick={() => this.props.login(this.user.value, this.passwd.value)}>提交</Buttton>
          </LoginInBOx>
        </LoginInWrapper>
      )
    }
    else {
      return (
        <Redirect to="/jianshu" />)
    }
  }
}
const mapStateToProps = state => {
  return {
    loginStatus: state.getIn(['login', 'login'])
  }
};
const mapDispatchToProps = dispatch => ({
  login(user, passwd) {
    const action = actionCreators.getLoginAction(user, passwd);
    dispatch(action);
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
