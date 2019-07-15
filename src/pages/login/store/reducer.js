
import { fromJS } from 'immutable';
import {actionTypes} from './index';
const defaultData = fromJS({
    login: false
})
export default (state = defaultData, action) => {
    switch(action.type){
        case actionTypes.LOGIN_IN:{
            console.log("nothing")
            return state.set("login",true)
        }
        default:
            return state;
    }
}