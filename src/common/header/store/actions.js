import {FOCUSEDIN,BLUROUT,GETHEADERLIST,MOUSEENTER,MOUSELEAVE,CHANGEPAGE} from './constants'
import axios from 'axios'
export const focusedIn=()=>{
    return {
        type:FOCUSEDIN
    }
}
export const blurOut=()=>{
    return {
        type:BLUROUT
    }
}
export const getHeaderList=()=>{
    return dispatch=>{
        axios.get("/api/searchInfoList.json")
        .then(res=>{
            let headerList=res.data.data
            dispatch({
                type:GETHEADERLIST,
                payload:headerList
            })
        })
    }
}
export const mouseEnter=()=>{
    return {
        type:MOUSEENTER
    }
}
export const mouseLeave=()=>{
    return {
        type:MOUSELEAVE
    }
}
export const changePage=(page)=>{
    return {
        type:CHANGEPAGE,
        payload:page
    }
}