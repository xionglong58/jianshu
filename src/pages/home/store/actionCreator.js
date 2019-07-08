import axios from 'axios';
import {actionTypes} from './index'


export const getHomeApi = (dispatch) => {
    return (dispatch) => {
        axios.get('api/homeApi').then((res) => {
            const result = res.data;
            // console.log(res.data.topicList)
            const action = {
                type: actionTypes.GET_HOME_API,
                topicList: result.topicList,
                articleList:result.articleList,
                recommendList:result.recommendList
            }
            dispatch(action);
        })
    }
}
