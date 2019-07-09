import React, { Component } from 'react';
import { ListItem, ListInfo, ReadMore } from '../style';
import { actionCreators } from '../store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class List extends Component {

    render() {
        const { topicList, handleReadMoreClick } = this.props;
        return (
            <div>
                {topicList.map((item) => {
                    return (
                        <Link to={'/detail/'+item.get('id')} key={item.get('title')}>
                            <ListItem key={item.get('title')}>
                                <img className="list-pic" src={item.get('imgUrl')} alt={item.get('title')} />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('description')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                })}
                <ReadMore onClick={handleReadMoreClick}>
                    阅读更多
                </ReadMore>
            </div>);
    }
}
const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(['home', 'articleList'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleReadMoreClick() {
            const action = actionCreators.getMoreArticle();
            dispatch(action);
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)