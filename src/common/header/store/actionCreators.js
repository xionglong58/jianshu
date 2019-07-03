import {actionTypes} from './index'

export const getHeaderOnFocus=()=>{
    return {
        type:actionTypes.HEADER_ONFOCUS_ACTION
    }
}
export const getHeaderOnBlur=()=>{
    return {
        type:actionTypes.HEADER_ONBLUR_ACTION
    }
}
