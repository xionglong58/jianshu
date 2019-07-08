import React, { Component } from 'react';
import { ListItem, ListInfo } from '../style';
import { connect } from 'react-redux';

class List extends Component {

    render() {
        const { topicList } = this.props;
        return (
            <div>
                {topicList.map((item) => {
                    return (
                        <ListItem key={item.get('id')}>
                            <img className="list-pic" src={item.get('imgUrl')} alt={item.get('title')} />
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('description')}</p>
                            </ListInfo>
                        </ListItem>
                    )
                })}
            </div>);
    }
}
const mapStateToProps = (state) => {
    return {
        topicList: state.getIn(['home', 'articleList'])
    }
}
export default connect(mapStateToProps, null)(List)