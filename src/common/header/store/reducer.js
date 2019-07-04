import {actionTypes} from './index'
import {fromJS} from 'immutable'
const defaultData=fromJS({
    focus:false,
    list:['1','2']
})

export default (state=defaultData,action)=>{
    if(action.type===actionTypes.HEADER_ONFOCUS_ACTION){
        return state.set('focus',true);
    }
    if(action.type===actionTypes.HEADER_ONBLUR_ACTION){
        return state.set('focus',false);
    }
    if(action.type===actionTypes.HEADER_UPDATA_LIST_ACTION){
        return state.set('list',(action.list));
    }
    
    return state;
}