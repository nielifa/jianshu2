import React, { Component } from 'react'
import {DetailWrapper,Header, Content} from './style'
import {getDetailList} from './store/actions'
import {connect} from 'react-redux'
class Detail extends Component {
    render() {
        let {detailList}=this.props
        return (
            <DetailWrapper>
                <Header>
                  {detailList.get("title")}
                </Header>  
                <Content dangerouslySetInnerHTML={{__html:detailList.get("content")}}/>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        let {getDetailList}=this.props
        getDetailList(this.props.match.params.id)
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        detailList: state.getIn(["reducerDetail","detailList"])
    }
}
export default connect(mapStateToProps,{getDetailList})(Detail)