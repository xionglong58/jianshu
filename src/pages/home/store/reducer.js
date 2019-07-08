import { fromJS } from 'immutable';
import * as actionTypes from './actionType'
// import { MockTopicData, MockListData, MockRecommendData } from '../../../mock'

// const MockTopic = fromJS(MockTopicData());
// const MockList = fromJS(MockListData());
// const MockRecommend = fromJS(MockRecommendData());


const defaultData = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    showScroll:false
})

export default (state = defaultData, action) => {
    switch (action.type) {
        case actionTypes.GET_HOME_API: {
            return state.merge({
                'topicList': fromJS(action.topicList.topicList),
                'articleList': fromJS(action.articleList.articleList),
                'recommendList': fromJS(action.recommendList.recommendList),
            })
        }
        case actionTypes.GET_MORE_ARTICLE:{
            return state.set('articleList',state.get('articleList').concat(action.moreArticleList));
        }
        case actionTypes.SCROLL_SHOW:{
            return state.set('showScroll',action.show);
        }
        
        default:
            return state;
    }
}