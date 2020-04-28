import styled from 'styled-components'
import logoPic from '../../statics/1.png'
//外部容器
export const HeaderWrapper=styled.div`
position:relative;
height:58px;
border-bottom:1px solid #f0f0f0
`
//logo
export const Logo=styled.a`
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
position:relative;
.zoom{
    positon:absloute
}
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