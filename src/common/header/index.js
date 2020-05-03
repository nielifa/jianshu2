import React, { Component } from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style'
import {connect} from 'react-redux'
import * as types from './store/actions'
import {exitLogin} from './../../pages/login/store/actions'
import {Link} from 'react-router-dom'
import {toJS} from 'immutable'
class Header extends Component {
    showInfo(){
        let {focused,headerList,show,mouseEnter,mouseLeave,page,totalPage,changePage}=this.props
        let pageList=[]
        let newList=headerList.toJS()
        if(newList.length){
        for(let i=(page-1)*10;i<page*10;i++){
        pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
        }
    }
       if(focused || show){
       return(<SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <SearchInfoTitle>
             热门搜索
             <SearchInfoSwitch onClick={()=>{
                 if(page<totalPage){
                    changePage(page+1)
                 }else{
                    changePage(1)
                 }
                 let originAngle=this.icon.style.transform.replace(/[^0-9]/ig,'')
                 if(originAngle){
                    originAngle=parseInt(originAngle,10)
                 }else{
                    originAngle=0
                 }
                 
                 this.icon.style.transform="rotate("+(originAngle+360)+"deg)"
                 
                 }}>
                 <i ref={(icon)=>{this.icon=icon}} className="iconfont spin">&#xe851;</i>换一批
             </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
            {
                pageList
            }
        </SearchInfoList>
    </SearchInfo>)
       }
    }
    render() {
        let {focused,focusedIn,blurOut,getHeaderList,headerList,login,exitLogin}=this.props
        let {showInfo} =this
        return (
            <div>
                <HeaderWrapper>
                    <Link to="/">
                    <Logo />
                    </Link>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        {
                            login?<NavItem className="right" onClick={()=>{exitLogin()}}>退出</NavItem>:<Link to="/login"><NavItem className="right">登录</NavItem></Link>
                        } 
                        <NavItem className="right">
                            <i className="iconfont search">&#xe609;</i>
                        </NavItem>
                        <SearchWrapper>
                        <NavSearch 
                        onFocus={()=>{focusedIn();if(headerList.size===0){getHeaderList()}}} className={focused?"focused":"blur"}
                        onBlur={()=>{blurOut()}}
                        ></NavSearch>
                        <i className="iconfont zoom" style={focused?{background:"#ccc"}:{}}>&#xe6a8;</i>
                         {showInfo.call(this)}
                        </SearchWrapper>
                        <Addition>
                            <Link to="/write">
                            <Button className="writting">
                            <i className="iconfont pencil">&#xe605;</i>
                                写文章
                            </Button>
                            </Link>
                            <Button className="reg">注册</Button>
                        </Addition>
                    </Nav>
                </HeaderWrapper>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        focused: state.getIn(["reducerHeader","focused"]),
        headerList:state.getIn(["reducerHeader","headerList"]),
        show:state.getIn(["reducerHeader","show"]),
        page:state.getIn(["reducerHeader","page"]),
        totalPage:state.getIn(["reducerHeader","totalPage"]),
        login:state.getIn(["reducerLogin","login"])
    }
}
export default connect(mapStateToProps,{types,exitLogin})(Header)