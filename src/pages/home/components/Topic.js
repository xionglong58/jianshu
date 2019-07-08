import React, { Component, Fragment } from 'react';
import { TopicWrapper, TopicItem } from '../style';
import { connect } from 'react-redux'
class Topic extends Component {
    render() {
        const {topicList}=this.props;
        return (
            <Fragment>
                <TopicWrapper>
                    {topicList.map((item) => {
                        return (
                            <TopicItem key={item.get("id")}>
                                <img className="topic-img" alt={item.get('id')}
                                    src={item.get('imgUrl')} />{item.get('title')}</TopicItem>
                        )
                    })}
                </TopicWrapper>
            </Fragment>);
    }
}
const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(['home', 'topicList'])
    }
}
export default connect(mapStateToProps, null)(Topic);