import React, { Component } from "react";
import { LoginInWrapper, LoginInBOx, Input, Buttton } from "./style";
import { connect } from "react-redux";
class Login extends Component {
  componentDidMount() {}
  render() {
    return (
      <LoginInWrapper>
        <LoginInBOx>
          <Input placeholder="账号" />
          <Input placeholder="密码" />
          <Buttton>提交</Buttton>
        </LoginInBOx>
      </LoginInWrapper>
    );
  }
}
const mapStateToProps = state => {};
const mapDispatchToProps = dispatch => {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
