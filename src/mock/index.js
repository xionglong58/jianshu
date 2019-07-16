import Mock from 'mockjs';

const hotWord = (num) => {
    let listPool = [];
    for (let i = 0; i < num; i++) {
        listPool.push(Mock.Random.cword(1, 5));
    }
    return { "data": listPool };
}

const MockTopicData = () => {
    return Mock.mock({
        "topicList|8": [{  
            'title': '@ctitle(2,4)',  
            'id|+1': 1,  
            'imgUrl': Mock.Random.dataImage('32x32','IMG')
        }]
    })
}
const MockListData=()=>{
    return Mock.mock({
        "articleList|6":[{
            "title":"@ctitle(10,20)",
            "id|+1":1001,
            "description":Mock.mock('@cparagraph(5)'),
            "imgUrl":Mock.Random.dataImage('125x100','IMG')
        }]
    })
}

const MockRecommendData=()=>{
    return Mock.mock({
        "recommendList|4":[{
            "title":"@ctitle(4)",
            "id|+1":1,
            "imgUrl":Mock.Random.dataImage('280x50','')
        }]
    })
}
const homeApi={
    topicList:MockTopicData(),
    articleList:MockListData(),
    recommendList:MockRecommendData()
}

export const MockJsonData = () => {
    Mock.mock('api/json/hotword', hotWord(50));
    Mock.mock('api/homeApi', homeApi);     
    Mock.mock('api/homeApi/moreArticle', MockListData()); 
    // Mock.mock('api/detailApi', detailApi());    
    return (true);
}

export const detailApi=()=>{
    // detailList:
    return Mock.mock({
        "detailList|1":[{
            "title":"@ctitle(8,15)",
            "id|+1":1,
            "imgUrl":Mock.Random.dataImage('600x300','IMG'),
            "article":Mock.Random.cparagraph(80,100)
        }]
    })
}


export const writerApi=()=>{
    return Mock.mock({
        "writerList|6":[{
            "name":"@cname()",
            "word|10-99":100,
            "like|10-99":100,               
            "id|+1":10001,
            "imgUrl":Mock.Random.dataImage('48x48','IMG')
        }]
    })
}

export const loginApi=()=>{
    return {
        status:true
    }
}



