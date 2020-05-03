import React, { PureComponent } from 'react'
import {TopicWrapper,TopicItem} from './../style'
import {connect} from 'react-redux'
import {getTopicList} from './../store/actions'
class Topic extends PureComponent {
    render() {
        let {topicList}=this.props
        return (
                <TopicWrapper>
                    {
                      topicList.map(value=>{
                          return <TopicItem key={value.get("id")}>
                              <img className="topic-pic" src={value.get("imgUrl")} alt=""/>
                              {value.get("title")}
                          </TopicItem>
                      })
                    }
                </TopicWrapper>
        )
    }
    componentDidMount(){
        let {getTopicList}=this.props
        getTopicList()
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        topicList: state.getIn(["reducerHome","topicList"])
    }
}
export default connect(mapStateToProps,{getTopicList})(Topic)