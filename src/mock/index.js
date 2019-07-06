import Mock from 'mockjs';
// import axios from 'axios';
import React from 'react';

const hotWord = (num) => {
    let listPool = [];
    for (let i = 0; i < num; i++) {
        listPool.push(Mock.Random.cword(1, 5));
    }
    return { "data": listPool };
}
// console.log(Mock.Random.dataImage('32x32', '#50B347', '#FFF', 'Mock.js'));
export const MockJsonData = () => {
    Mock.mock('api/json/hotword', hotWord(50));
    return (true);

}
export const MockTopicData = () => {
    return Mock.mock({
        // "topicList|+1": [
        //     {
        //         "topicListItem": {
        //             "id|+1": 1,
        //             "title|+1": Mock.Random.cword(1, 5),
        //             "imgUrl|+1": Mock.Random.dataImage('32x32', '#50B347', '#FFF', 'Mock.js')
        //         }
        //     }]
        "topicList|6": [{  
            'title': '@ctitle',  
            'id|+1': 1,  
            'imgUrl': Mock.Random.dataImage('32x32', '#50B347', '#FFF', 'Mock.js')
        }]
    })
}

// Mock.mock('api/json/test', data)