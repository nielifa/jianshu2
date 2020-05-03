import React, { PureComponent } from 'react'
import {HomeWrapper,HomeLeft,HomeRight,Top} from './style'
import {connect} from 'react-redux'
import {changeTop} from './store/actions'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommends from './components/Recommends'
import List from './components/List'
class Home extends PureComponent {
    handdleScroll(){
        window.scrollTo(0,0)
    }
    bindEvents(){
        window.addEventListener("scroll",this.watchTop.bind(this))
    }
    watchTop(){
        if(document.documentElement.scrollTop>200){
            this.props.changeTop(true)
        }else{
            this.props.changeTop(false)
        }
    }
    render() {
        let {backTop}=this.props
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload-images.jianshu.io/upload_images/16623634-dd2b82b615b125ae?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240" alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommends/>
                    <Writer/>
                    {
                        backTop?<Top onClick={this.handdleScroll}>回到顶部</Top>:null
                    }
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.bindEvents()
    }
    componentWillUnmount(){
        window.removeEventListener("scroll",this.watchTop.bind(this))
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        backTop: state.getIn(["reducerHome","backTop"])
    }
}
export default connect(mapStateToProps,{changeTop})(Home)