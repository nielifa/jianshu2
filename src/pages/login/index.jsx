import React, { PureComponent } from 'react'
import {LoginWrapper,LoginBox,Input,Button} from './style'
import {Redirect} from 'react-router-dom'
import {changeLogin} from './store/actions'
import {connect} from 'react-redux'
class Login extends PureComponent {
    render() {
        let {changeLogin,login}=this.props
        if(!login){
        return (
            <LoginWrapper>
                <LoginBox>
                <Input placeholder="账号" ref={(input)=>{this.userName=input}}></Input>
                <Input placeholder="密码" type="password" ref={(input)=>{this.password=input}}></Input>
                <Button onClick={()=>{changeLogin(this.password.value,this.userName.value)}}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )}else{
           return <Redirect to="/" />
        }
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        login: state.getIn(["reducerLogin","login"])
    }
}
export default connect(mapStateToProps,{changeLogin})(Login)