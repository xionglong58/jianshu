import {actionTypes} from './index'
const defaultData={
    focus:false
}
export default (state=defaultData,action)=>{
    if(action.type===actionTypes.HEADER_ONFOCUS_ACTION){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focus=true;
        return newState;
    }
    if(action.type===actionTypes.HEADER_ONBLUR_ACTION){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focus=false;
        return newState;
    }
    
    return state;
}