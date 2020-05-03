import {fromJS} from 'immutable'
import {GETTOPICLIST,GETARTICLELIST,GETARTICLEMORE,CHANGETOP} from './constants'
let defaultState=fromJS({
    topicList:[],
    articleList:[],
    articlePage:1,
    backTop:false
})
export const reducerHome = (state =defaultState , action) => {
    switch (action.type) {
        case GETTOPICLIST:
            return state.set("topicList",fromJS(action.payload))
        case GETARTICLELIST:
            return state.set("articleList",fromJS(action.payload))
        case GETARTICLEMORE:
            return state.merge({
                articleList:state.get("articleList").concat(fromJS(action.payload)),
                articlePage:state.get("articlePage")+1
            })
        case CHANGETOP:
            return state.set("backTop",action.payload)
        default:
            return state
    }
}