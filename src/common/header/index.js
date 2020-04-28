import React, { Component } from 'react'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button} from './style'
export default class Header extends Component {
    render() {
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
                        <NavSearch></NavSearch>
                        <i className="iconfont zoom">&#xe6a8;</i>
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
