import React, { PureComponent, Fragment } from "react";
import { WriterWrapper, WriterItem, MoreWriter } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";
class Writer extends PureComponent {
  // state = {};
  componentDidMount() {
    this.props.handleGetWriter();
  }
  render() {
    return (
      <Fragment>
        <WriterWrapper>
          {this.props.writerList.map(item => {
            return (
              <WriterItem key={item.get("name")}>
                <img src={item.get("imgUrl")} alt={item.get("id")} />
                <div>
                  <p className="name">{item.get("name")}</p>
                  <span className="follow">
                    <span className="iconfont">&#xe62a;</span>关注
                  </span>
                </div>
                <p className="totalWord">一共写了{item.get("word")}k字·{item.get("like")}k喜欢</p>
              </WriterItem>
            );
          })}
        
        <MoreWriter onClick={this.props.handleGetWriter}>换一批</MoreWriter>
        </WriterWrapper>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    writerList: state.getIn(["home", "writerList"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleGetWriter() {
      const action = actionCreators.getWriter();
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Writer);
