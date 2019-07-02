import {HEADER_ONFOCUS_ACTION,HEADER_ONBLUR_ACTION} from './actionTypes'
const defaultData={
    focus:false
}

export default (state=defaultData,action)=>{
    if(action.type===HEADER_ONFOCUS_ACTION){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focus=true;
        return newState;
    }
    if(action.type===HEADER_ONBLUR_ACTION){
        const newState=JSON.parse(JSON.stringify(state));
        newState.focus=false;
        return newState;
    }
    
    return state;
}