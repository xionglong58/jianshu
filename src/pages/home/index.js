import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { HomeWrapper, HomeRight, HomeLeft } from './style';
import { actionCreators } from './store';
// import axios from 'axios';
class Home extends Component {
    componentDidMount() {
        this.props.HandleGetHomeApi()
    }
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        HandleGetHomeApi() {
            const action=actionCreators.getHomeApi();
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps)(Home);