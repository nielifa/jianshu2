import React, { Component } from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style'
import {connect} from 'react-redux'
import {focusedIn,blurOut,getHeaderList,mouseEnter,mouseLeave} from './store/actions'
class Header extends Component {
    showInfo(){
        let {focused,headerList,show,mouseEnter,mouseLeave}=this.props
       if(focused || show){
       return(<SearchInfo onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
        <SearchInfoTitle>
             热门搜索
             <SearchInfoSwitch>
                 换一批
             </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
            {
                headerList.map((value,index)=>{
                return <SearchInfoItem key={index} >
                          {value}
                       </SearchInfoItem>
                })
            }
        </SearchInfoList>
    </SearchInfo>)
       }
    }
    render() {
        let {focused,focusedIn,blurOut,getHeaderList}=this.props
        let {showInfo} =this
        return (
            <div>
                <HeaderWrapper>
                    <Logo href="/"/>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        <NavItem className="right">登录</NavItem>
                        <NavItem className="right">
                            <i className="iconfont search">&#xe609;</i>
                        </NavItem>
                        <SearchWrapper>
                        <NavSearch 
                        onFocus={()=>{focusedIn();getHeaderList()}} className={focused?"focused":"blur"}
                        onBlur={()=>{blurOut()}}
                        ></NavSearch>
                        <i className="iconfont zoom" style={focused?{background:"#ccc"}:{}}>&#xe6a8;</i>
                         {showInfo.call(this)}
                        </SearchWrapper>
                        <Addition>
                            <Button className="writting">
                            <i className="iconfont pencil">&#xe605;</i>
                                写文章
                            </Button>
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
        show:state.getIn(["reducerHeader","show"])
    }
}
export default connect(mapStateToProps,{focusedIn,blurOut,getHeaderList,mouseEnter,mouseLeave})(Header)