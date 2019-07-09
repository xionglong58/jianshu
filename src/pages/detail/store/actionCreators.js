
import axios from "axios";
import { actionTypes } from "../store";
import Mock from 'mockjs';
import {detailApi} from '../../../mock';
Mock.mock('api/detailApi', detailApi()); 
const getArticleDetailAction = articleList => {
  return {
    type: actionTypes.GETARTICLADETAIL,
    articleList
  };
};
export const getDetailArticleApi = (id) => {
  return dispatch => {
    Mock.mock('api/detailApi/id='+id, detailApi()); 
    axios.get('api/detailApi/id='+id).then(res => {
      const action = getArticleDetailAction(res.data.detailList);
      dispatch(action);
    });
  };
};
