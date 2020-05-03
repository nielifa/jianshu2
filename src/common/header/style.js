import styled from 'styled-components'
import logoPic from '../../statics/1.png'
//外部容器
export const HeaderWrapper=styled.div`
position:relative;
height:58px;
border-bottom:1px solid #f0f0f0
`
//logo
export const Logo=styled.div`
position:absolute;
top:0;
left:0;
dispaly:block;
width:100px;
height:56px;
background:url(${logoPic});
background-size:contain
`
//中间区域
export const Nav=styled.div`
width:960px;
height:100%;
padding-right:70px;
box-sizing:border-box;
margin:0 auto;
`
//按钮
export const NavItem=styled.div`
line-height:56px;
padding:0 15px;
color:#333;
.search{
    font-size:25px;
}
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696
}
&.active{
    color:#ea6f5a
}
`
//搜索框
export const SearchWrapper=styled.div`
float:left;
position:relative;
.zoom{
    position:absolute;
    right:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    bottom:5px;
    text-align:center
}

`
export const NavSearch=styled.input.attrs({
    placeholder:"搜索"
})`
width:160px;
height:38px;
margin-top:9px;
margin-left:20px;
padding:0 20px;
box-sizing:border-box;
border:none;
outline:none;
border-radius:19px;
background:#eee;
font-size:14px;
&::placeholder{
color:#999
} 
&.focused{
    transition:all .2s ease-in;
    width:240px
}
&.blur{
    transition:all .2s ease-in;
    width:160px
}
`
//注册、写文章
export const Addition=styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button=styled.div`
float:right;
line-height:38px;
border-radius:19px;
margin-top:9px;
margin-right:20px;
padding:0 20px;
border:1px solid #ec6149;
font-size:14px;
&.reg{
color:#ec6149
}
&.writting{
color:#fff;
background:#ec6149
}
.pencil{
    padding-right:5px;
}
`
//热门搜索
export const SearchInfo=styled.div`
position:absolute;
left:0;
top:56px;
z-index:1;
width:240px;
padding:0 20px;
box-shadow:0 0 8px rgba(0,0,0,.2);
background:#fff;
`
export const SearchInfoTitle=styled.div`
margin-top:20px;
margin-bottom:15px;
line-height:20px;
font-size:14px;
color:#969696
`
export const SearchInfoSwitch=styled.div`
float:right;
font-size:13px;
.spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    transition:all .2s ease-in;
    transform-origin:center center;
}
`
export const SearchInfoItem=styled.div`
display:block;
float:left;
margin-right:10px;
margin-bottom:10px;
line-height:20px;
padding:0 5px;
font-size:12px;
border:1px solid #ddd;
color:#787878;
border-radius:3px
`
export const SearchInfoList=styled.div`
overflow:hidden
`