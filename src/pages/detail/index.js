import React, { PureComponent } from "react";
import { DetailWrapper, Context } from "./style";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { withRouter } from 'react-router-dom';
class Detail extends PureComponent {
  // state = {  }
  componentDidMount() {
    this.props.handleArticleDetail(this.props.match.params.id);
  }
  render() {
    return (
      <DetailWrapper>
        <h3>{this.props.articleList.title}</h3>
        <img className="pic" src={this.props.articleList.imgUrl} alt={this.props.articleList.title} />
        <Context>
          <p>{this.props.articleList.article}</p>
        </Context>
      </DetailWrapper>
    );
  }
}
const mapStateToProps = state => {
  return {
    articleList: state.getIn(["detail", "detailList"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleArticleDetail(id) {
      const action = actionCreators.getDetailArticleApi(id);
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Detail));
