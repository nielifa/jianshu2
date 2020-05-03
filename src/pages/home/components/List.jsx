import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {ListItem,ListInfo,LoadMore} from './../style'
import {getArticleList,getArticleMore} from './../store/actions'
import {Link} from 'react-router-dom'
class List extends PureComponent {
    render() {
        let {articleList,getArticleMore,articlePage}=this.props
        return (
            <div>
            {
                articleList.map((item,index)=>{
                    return <Link  key={index} to={"/detail/"+item.get("id")}><ListItem>
                    <img className="list-pic" src={item.get("imgUrl")} alt=""/>
                    <ListInfo>
                        <h3 className="title">{item.get("title")}</h3>
                        <p className="desc">
                           {item.get("desc")}
                        </p>
                    </ListInfo>
                </ListItem>
                </Link>
                })
            }
            <LoadMore onClick={()=>{getArticleMore(articlePage)}}>阅读更多</LoadMore>
            </div>
        )
    }
    componentDidMount(){
        let {getArticleList}=this.props
        getArticleList()
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        articleList: state.getIn(["reducerHome","articleList"]),
        articlePage: state.getIn(["reducerHome","articlePage"])
    }
}
export default connect(mapStateToProps,{getArticleList,getArticleMore})(List)