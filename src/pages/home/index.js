import React, { Component} from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { HomeWrapper, HomeRight, HomeLeft } from './style';
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        );
    }
}
export default Home;