
import {actionTypes} from './index'
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