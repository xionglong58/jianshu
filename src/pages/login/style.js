import styled from "styled-components";
export const LoginInWrapper = styled.div`
  position: absolute;
  background: #eee;
  bottom: 0px;
  top: 56px;
  left: 0px;
  margin: 0 auto;
  width: 100%;
`;
export const LoginInBOx = styled.div`
  width: 400px;
  height: 200px;
  margin: 80px auto;
  position: relative;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding-top: 20px;
  .user {
    float: left;
    position: absolute;
    left: 80px;
    top: 40px;
    line-height: 34px;
    color:#888;
  }
  .key {
    float: left;
    position: absolute;
    line-height: 34px;
    left: 80px;
    top: 94px;
    color:#333;
  }
`;
export const Input = styled.input`
  display: block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  background: #fff;
  margin: 20px auto;
  border-radius: 5px;
  padding: 0 25px;
`;

export const Buttton = styled.div`
  display: block;
  width: 200px;
  height: 43px;
  line-height: 43px;
  background: #fff;
  margin: 20px auto;
  background: #3194d0;
  text-align: center;
  border-radius: 21px;
  color: #fff;
  cursor: pointer;
`;
