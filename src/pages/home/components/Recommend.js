import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'
class Recommend extends PureComponent {
    state = {}
    render() {
        return (
            <RecommendWrapper>
                {this.props.recommendList.map((item) => {
                    return (
                        <RecommendItem imgUrl={item.get('imgUrl')}  key={item.get('title')}>
                            {item.get('title')+' >'}
                        </RecommendItem>
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