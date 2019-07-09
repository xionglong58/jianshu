import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
  width: 960px;
  // background:red;
  // height:100px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeRight = styled.div`
  position: absolute;
  right: 0px;
  float: left;
  width: 280px;
  height: 100%;
`;
export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  height: 100%;
`;
export const TopicWrapper = styled.div`
  padding: 10px 0 10px 0px;
  height: 110px;
  // background:#eee;
  border-bottom: 1px solid #f0f0f0;
`;
export const TopicItem = styled.div`
  float: left;
  font-size: 15px;
  list-style: none;
  background: #f7f7f7;
  height: 36px;
  cursor: pointer;
  display: inline;
  padding-right: 10px;
  line-height: 32px;
  margin-right: 25px;
  margin-top: 10px;
  border: 1px solid #969696;
  border-radius: 5px;
  font-size: 15px;
  color: #969696;
  .topic-img {
    display: block;
    float: left;
    width: 36px;
    height: 36px;
    margin-right: 10px;
  }
`;
export const ListItem = styled.div`
overflow：hidden;
height:100px;
padding:10px 0px;
border-bottom:1px solid  #f0f0f0;
.list-pic{
    dispaly:block;
    float:right;    
    height:100px;
    width:125px;
    border-radius:10px;
}
cursor:pointer;

`;

export const ListInfo = styled.div`
  float: left;
  width: 500px;
  .title {
    font-size: 18px;
    line-height: 1.7;
    font-weight: bold;
    color: #333;
  }
  .desc {
    font-size: 13px;
    line-height: 1.7;
    color: #999;
  }
`;
export const RecommendWrapper = styled.div`
  margin: 20px 0px;
`;
export const RecommendItem = styled.div`
  width: 260px;
  height: 50px;
  background: pink;
  border-radius: 5px;
  margin-top: 10px;
  line-height: 50px;
  // padding-left:20px;
  text-align: center;
  color: #f1f2f3;
  font-size: 15px;
  font-weight: bold;
  background: url(${props => props.imgUrl});
  cursor: pointer;
`;

export const WriterWrapper = styled.div`
  width: 260px;
  /* height: 290px; */
  border-radius: 5px;
  margin-top: 10px;
`;
export const WriterItem = styled.div`
  width: 260px;
  height: 47px;
  border-radius: 5px;
  margin-top: 10px;
  font-size: 14px;
  div{
        overflow: hidden;
  }
  img {
    display: block;
    width: 48px;
    height: 48px;
    float: left;
    border-radius: 24px;
    cursor:pointer;
  }
  .name{
    float: left;
    line-height: 20px;
    margin: 0 10px;
    cursor:pointer;
  }
  .totalWord{
      display:block;
      color:#969696;
      font-size:12px;
      margin-left:48px;
      padding: 0 10px;
  }
  .follow {
    float: right;
    line-height: 20px;
    margin-right: 10px;
    color: #42c02e;
    cursor:pointer;
    span {
      line-height: 20px;
      font-size: 14px;
    }
  }
`;
export const MoreWriter = styled.div`
  border-radius: 5px;
  margin-top: 10px;
  width: 260px;
  height: 35px;
  background: #f7f7f7;
  font-size: 13px;
  text-align: center;
  line-height: 35px;
  cursor:pointer;
`;

export const ReadMore = styled.div`
  margin: 30px 0px;
  width: 100%;
  height: 40px;
  color: #f1f2f3;
  background: #333;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
`;
export const ScrollToTop = styled.div`
  position: fixed;
  height: 40px;
  width: 80px;
  right: 30px;
  bottom: 30px;
  border: 1px solid #333;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
`;
