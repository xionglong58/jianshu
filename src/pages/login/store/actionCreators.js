
import {actionTypes} from './index';
import axios from 'axios';
import Mock from 'mockjs';
import {loginApi} from '../../../mock'
const loginAction = () => {
    return {
        type: actionTypes.LOGIN_IN,
        login: true
    }
}

const logoutAction = () => {
    return {
        type: actionTypes.LOGIN_OUT,
        login: false
    }
}

export const getLoginAction = (user, passwd) => {
    return dispatch => {
        Mock.mock("api/loginApi?user="+user+'passwd='+passwd, loginApi());
        axios.get('api/loginApi?user='+user+'passwd='+passwd).then(
            (res)=>{
                alert('api/loginApi?user='+user+'passwd='+passwd)
            }
        )
        const action = loginAction();
        dispatch(action)
    }
}
export const getLoginOutAction = () => {
    return dispatch => {
        const action = logoutAction();
        dispatch(action)
    }
}