import React, { Component } from "react";
import { DetailWrapper, Context } from "./style";
import axios from "axios";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { List } from "immutable";
class Detail extends Component {
  // state = {  }
  componentDidMount() {
    this.props.handleArticleDetail(this.props.match.params);
  }
  render() {
    console.log(this.props.match.params)
    return (
      <DetailWrapper>
        <h3>{this.props.articleList.title}</h3>
        <img className="pic" src={this.props.articleList.imgUrl} />
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
)(Detail);
