import { fromJS } from 'immutable'
// import { MockTopicData, MockListData, MockRecommendData } from '../../../mock'

// const MockTopic = fromJS(MockTopicData());
// const MockList = fromJS(MockListData());
// const MockRecommend = fromJS(MockRecommendData());


const defaultData = fromJS({
    topicList: [],
    articleList: [],
    recommendList: []
})

export default (state = defaultData, action) => {
    if (action.type === 'get_home_data') {
        return state.merge({
            'topicList': fromJS(action.topicList.topicList),
            'articleList': fromJS(action.articleList.articleList),
            'recommendList': fromJS(action.recommendList.recommendList), 
        })
    }
    return state;
}