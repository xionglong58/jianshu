import { fromJS } from "immutable";
import { actionTypes } from "../store";
const defaultData = fromJS({
  detailList: [
    {
      id: 1,
      imgUrl: "",
      title: "nothing",
      acticle: "article"
    }
  ]
});

export default (state = defaultData, action) => {
  switch (action.type) {
    case actionTypes.GETARTICLADETAIL: {
        console.log(action)
      return state.set("detailList", action.articleList );
    }
    default:
      return state;
  }
};
