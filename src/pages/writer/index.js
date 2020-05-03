import React, { PureComponent } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Write extends PureComponent {
    render() {
        let {login}=this.props
        if(login){
            return (
                <div>
                    写文章
                </div>
            )
        }else{
        return <Redirect to="/login"/>
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        login: state.getIn(["reducerLogin","login"])
    }
}
export default connect(mapStateToProps)(Write)