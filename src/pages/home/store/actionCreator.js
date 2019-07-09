import axios from "axios";
import Mock from "mockjs";
import { actionTypes } from "./index";
import { fromJS } from "immutable";
import { writerApi } from "../../../mock";

const handleGetHomeData = result => {
  return {
    type: actionTypes.GET_HOME_API,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
  };
};

const handleGetMorearticle = result => {
  return {
    type: actionTypes.GET_MORE_ARTICLE,
    moreArticleList: fromJS(result.articleList)
  };
};

export const getHomeApi = () => {
  return dispatch => {
    axios.get("api/homeApi").then(res => {
      const result = res.data;
      const action = handleGetHomeData(result);
      dispatch(action);
    });
  };
};

export const getMoreArticle = () => {
  return dispatch => {
    axios.get("api/homeApi/moreArticle").then(res => {
      // console.log(res.data);
      const result = res.data;
      const action = handleGetMorearticle(result);
      dispatch(action);
    });
  };
};
export const changeScrollShow = show => {
  return {
    type: actionTypes.SCROLL_SHOW,
    show
  };
};
const getWriterAction = writerList => {
  return {
    type: actionTypes.GET_WRITER_LIST,
    writerList:fromJS(writerList)
  };
};
export const getWriter = () => {
  return dispatch => {
    Mock.mock("api/writerApi", writerApi());
    axios.get("api/writerApi").then(res => {
      dispatch(getWriterAction(res.data.writerList));
    });
  };
};
