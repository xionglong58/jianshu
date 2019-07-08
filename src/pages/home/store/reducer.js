import {fromJS} from 'immutable'
import {MockTopicData,MockListData,MockRecommendData} from '../../../mock'

const MockTopic=fromJS(MockTopicData());
const MockList=fromJS(MockListData());
const MockRecommend=fromJS(MockRecommendData());


const defaultData=fromJS({
    topicList:MockTopic.get('topicList'),
    articleList:MockList.get('articleList'),
    recommendList:MockRecommend.get('recommendList')       
})

export default (state=defaultData,action)=>{
    return state;
}