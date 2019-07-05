import React, { Component} from 'react';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { HomeWrapper, HomeRight, HomeLeft } from './style';

class Home extends Component {
    // state = {  }
    render() {
        return (
            <HomeWrapper>
                <HomeRight>
                    <Topic />
                    <List />
                </HomeRight>
                <HomeLeft>
                    <Recommend />
                    <Writer/>
                </HomeLeft>

            </HomeWrapper>
        );
    }
}

export default Home;