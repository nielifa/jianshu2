import axios from 'axios'
import {GETTOPICLIST,GETARTICLELIST,GETARTICLEMORE,CHANGETOP} from './constants'
export const getTopicList=()=>{
    return dispatch=>{
        axios.get("/api/homeList.json")
        .then(res=>{
            dispatch({
                type:GETTOPICLIST,
                payload:res.data.data.topicList
            })
        })
    }
}
export const getArticleList=()=>{
    return async (dispatch)=>{
        let res=await axios.get("/api/homeList.json")
            dispatch({
                type:GETARTICLELIST,
                payload:res.data.data.articleList
            })
    }
}
export const getArticleMore=(articlePage)=>{
    return async (dispatch)=>{
        let res=await axios.get("/api/homeListMore.json?page="+articlePage)
        dispatch({
            type:GETARTICLEMORE,
            payload:res.data.data
        })
    }
}
export const changeTop=(payload)=>{
    return {
        type:CHANGETOP,
        payload
    }
}