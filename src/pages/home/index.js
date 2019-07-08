import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { HomeWrapper, HomeRight, HomeLeft, ScrollToTop } from './style';
import { actionCreators } from './store';
// import axios from 'axios';
class Home extends Component {
    componentDidMount() {
        this.props.HandleGetHomeApi();
        this.bindEvents();
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollShowState);
        // 记住在组件销毁时要解绑事件，否则会影响其他组件对同一事件的操作
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollShowState);
    }
    handleScrollTop() {
        window.scrollTo(0, 0);
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
                {this.props.showScroll ? 
                <ScrollToTop onClick={this.handleScrollTop}>
                    回到顶部
                </ScrollToTop> : null}
            </HomeWrapper>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        HandleGetHomeApi() {
            const action = actionCreators.getHomeApi();
            dispatch(action);
        },
        changeScrollShowState(){
            if(document.documentElement.scrollTop>100){
                dispatch(actionCreators.changeScrollShow(true))
            }
            else{
                dispatch(actionCreators.changeScrollShow(false))
            }
        }
    }
}
const mapStateToState = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}
export default connect(mapStateToState, mapDispatchToProps)(Home);