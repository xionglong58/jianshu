
import {actionTypes} from './index'
const loginAction = () => {
    return {
        type: actionTypes.LOGIN_IN,
        login: true
    }
}

export const getLoginAction = (user, passwd) => {
    return dispatch => {
        const action = loginAction();
        dispatch(action)
    }
}