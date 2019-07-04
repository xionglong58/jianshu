import { actionTypes } from "./index";
import axios from "axios";
import {fromJS} from "immutable"
export const getHeaderOnFocus = () => {
  return {
    type: actionTypes.HEADER_ONFOCUS_ACTION
  };
};
export const getHeaderOnBlur = () => {
  return {
    type: actionTypes.HEADER_ONBLUR_ACTION
  };
};
const updateList=(list)=>{
    return {
        type:actionTypes.HEADER_UPDATA_LIST_ACTION,
        list:fromJS(list.data)
    }
}
export const getList = () => {
  return dispatch => {
    axios
      .get(
        "api/headerList.json"
      )
      .then(res => {
          dispatch(updateList(res.data))
      });
  };
};
