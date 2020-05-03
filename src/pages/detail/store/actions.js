import axios from 'axios'
import {GETDETAILLIST} from './constants'
export const getDetailList=(id)=>{
       return async dispatch=>{
           let res=await axios.get("/api/detailLIst.json?id="+id)
           dispatch({
               type:GETDETAILLIST,
               payload:res.data.data
           })
       }
}