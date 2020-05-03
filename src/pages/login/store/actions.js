import axios from 'axios'
import {CHANGELOGIN,EXITLOGIN} from './constants'
export const changeLogin=(password,username)=>{
       return async dispatch=>{
           let res=await axios.get("/api/login.json?password="+password+"&username="+username) 
           dispatch({
               type:CHANGELOGIN,
               payload:res.data.data
           })
        }
}
export const exitLogin=()=>{
    return {
        type:EXITLOGIN,
        payload:false
    }
}