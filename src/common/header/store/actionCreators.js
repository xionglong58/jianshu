import { actionTypes } from "./index";
import axios from "axios";
import { fromJS } from "immutable"
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
const updateList = (list) => {
  return {
    type: actionTypes.HEADER_UPDATA_LIST_ACTION,
    list: fromJS(list.data),
    totalPage: Math.ceil( list.data.length / 10)
  }
}
export const getList = () => {
  return dispatch => {
    axios
      .get(
        "api/json/hotword"
      )
      .then(res => {
        dispatch(updateList(res.data))
      });
  };
};

export const getMouseEnterAction = () => {
  return {
    type: actionTypes.HANDLE_MOUSE_ENTER
  }
}
export const getMouseLeaveAction = () => {
  return {
    type: actionTypes.HANDLE_MOUSE_LEAVE
  }
}
export const getChangePage= (page) => {
    return {
      type: actionTypes.HANDLE_CHANGE_PAGE,
      page:page
    }
  }
