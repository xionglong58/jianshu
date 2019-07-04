import { actionTypes } from './index'
import { fromJS } from 'immutable'
const defaultData = fromJS({
    focus: false,
    mouseEnter: false,
    page:1,
    totalPage:1,
    list: [],
})

export default (state = defaultData, action) => {
    switch (action.type) {
        case actionTypes.HEADER_ONFOCUS_ACTION:
            return state.set('focus', true);
        case actionTypes.HEADER_ONBLUR_ACTION:
            return state.set('focus', false);
        case actionTypes.HEADER_UPDATA_LIST_ACTION:
            return state.set('list', action.list).set('totalPage',action.totalPage);
        case actionTypes.HANDLE_MOUSE_ENTER: {
            return state.set('mouseEnter', true);
        }
        case actionTypes.HANDLE_MOUSE_LEAVE: {
            return state.set('mouseEnter', false);
        }
        case actionTypes.HANDLE_CHANGE_PAGE: {
            return state.set('page', 4);
        }
        default:
            return state;
    }
}