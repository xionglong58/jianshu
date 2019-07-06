import styled from 'styled-components'

export const HomeWrapper = styled.div`
position:relative;
width:960px;
// background:red;
height:100px;
margin:0 auto;
overflow:hidden;
`
export const HomeRight = styled.div`
float:left;
width:625px;
height:100%;
`
export const HomeLeft = styled.div`
position:absolute;
right:0px;
float:left;
width:280px;
height:100%;
`
export const TopicWrapper = styled.div`
padding:10px 0 10px 0px;
height:40px;
background:#eee;
`
export const TopicItem = styled.div`
float:left;
font-size:15px;
list-style:none;
background:#f7f7f7;
height:36px;
width:100px;
display:inline;
line-height:36px;
margin-right:25px;
border:1px solid #969696;
border-radius:5px;
.topic-img{
    display:block;
    width:36px;
    height:36px;
}
`