import Mock from 'mockjs';

const hotWord = (num) => {
    let listPool = [];
    for (let i = 0; i < num; i++) {
        listPool.push(Mock.Random.cword(1, 5));
    }
    return { "data": listPool };
}

export const MockTopicData = () => {
    return Mock.mock({
        "topicList|8": [{  
            'title': '@ctitle(2,4)',  
            'id|+1': 1,  
            'imgUrl': Mock.Random.dataImage('32x32','IMG')
        }]
    })
}
export const MockListData=()=>{
    return Mock.mock({
        "articleList|6":[{
            "title":"@ctitle(10,20)",
            "id|+1":1001,
            "description":Mock.mock('@cparagraph(5)'),
            "imgUrl":Mock.Random.dataImage('125x100','IMG')
        }]
    })
}

export const MockRecommendData=()=>{
    return Mock.mock({
        "recommendList|4":[{
            "title":"@ctitle(4)",
            "id|+1":1,
            "imgUrl":Mock.Random.dataImage('280x50','')
        }]
    })
}


export const MockJsonData = () => {
    Mock.mock('api/json/hotword', hotWord(50));
    return (true);

}
// Mock.mock('api/json/test', data)