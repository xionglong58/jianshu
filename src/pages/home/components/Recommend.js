import React, { Component } from 'react';
import { RecommendWrapper, RecommendIrem } from '../style'
import { connect } from 'react-redux'
class Recommend extends Component {
    state = {}
    render() {
        return (
            <RecommendWrapper>
                {this.props.recommendList.map((item) => {
                    return (
                        <RecommendIrem imgUrl={item.get('imgUrl')}  key={item.get('title')}>
                            {item.get('title')+' >'}
                        </RecommendIrem>
                    )
                })}
            </RecommendWrapper>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        recommendList: state.getIn(['home', 'recommendList'])
    }
}
export default connect(mapStateToProps, null)(Recommend);