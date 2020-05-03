import styled from 'styled-components'
export const HomeWrapper=styled.div`
width:960px;
margin:0 auto;
overflow:hidden;
`
export const HomeLeft=styled.div`
width:625px;
margin-left:15px;
padding-top:30px;
float:left;
.banner-img{
    width:625px;
    height:270px
}
`
export const HomeRight=styled.div`
width:240px;
float:right;
`
export const TopicWrapper=styled.div`
padding:20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
border-bottom:1px solid #dcdcdc
`
export const TopicItem=styled.div`
float:left;
background:#f7f7f7;
height:32px;
line-height:32px;
margin-left:18px;
margin-bottom:18px;
padding-right:10px;
font-size:14px;
color:#000;
border:1px solid #dcdcdc;
border-radius:4px;
.topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
}
`
export const ListItem=styled.div`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.list-pic{
   display:block;
   width:125px;
   height:100px; 
   float:right;
   border-radius:10px;

}
`
export const ListInfo=styled.div`
width:500px;
float:left;
.title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
}
.desc{
    line-height:24px;
    font-size:13px;
    color:#999
}
`
export const LoadMore=styled.div`
width:100%;
height:40px;
line-height:40px;
background:#a5a5a5;
border-radius:20px;
color:#fff;
margin:30px 0;
text-align:center;
cursor:pointer
`
export const Top=styled.div`
position:fixed;
right:60px;
bottom:0px;
width:100px;
height:60px;
line-height:60px;
text-align:center;
background:red;
font-size:18px;
color:#000
`