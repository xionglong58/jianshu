import {fromJS} from 'immutable'
import {MockTopicData} from '../../../mock'
const MockTopic=fromJS(MockTopicData());
const defaultData=fromJS({
    topicList:MockTopic.get('topicList')
})

export default (state=defaultData,action)=>{
    return state;
}