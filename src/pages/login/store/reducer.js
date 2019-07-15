
import { fromJS } from 'immutable';
import {actionTypes} from './index';
const defaultData = fromJS({
    login: false
})
export default (state = defaultData, action) => {
    switch(action.type){
        case actionTypes.LOGIN_IN:{
            return state.set("login",true)
        }
        case actionTypes.LOGIN_OUT:{
            return state.set("login",false)
        }
        
        default:
            return state;
    }
}