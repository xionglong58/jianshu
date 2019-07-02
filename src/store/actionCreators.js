import {HEADER_ONFOCUS_ACTION,HEADER_ONBLUR_ACTION} from './actionTypes'

export const getHeaderOnFocus=()=>{
    return {
        type:HEADER_ONFOCUS_ACTION
    }
}
export const getHeaderOnBlur=()=>{
    return {
        type:HEADER_ONBLUR_ACTION
    }
}
