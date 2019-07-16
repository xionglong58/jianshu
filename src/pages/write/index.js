import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import {Info} from './style';
class Writer extends PureComponent {
    render() {
        if (this.props.loginStatus) {
            return (
                <Info>开发中...</Info>
            )
        }
        else {
            alert("请先登录");
            return (
                <Redirect to="/" />)
        }
    }
}
const mapStateToProps = state => {
    return {
        loginStatus: state.getIn(['login', 'login'])
    }
};
export default connect(
    mapStateToProps,
    null
)(Writer);
