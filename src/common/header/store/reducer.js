import {FOCUSEDIN,BLUROUT,GETHEADERLIST,MOUSEENTER,MOUSELEAVE} from './constants'
import {fromJS} from 'immutable'
const defaultState=fromJS({
    focused:false,
    headerList:[],
    show:false
})
export const reducerHeader = (state = defaultState, action) => {
    switch (action.type) {
        case FOCUSEDIN:
            return state.set("focused",true)
        case BLUROUT:
            return state.set("focused",false)
        case GETHEADERLIST:
            return state.set("headerList",fromJS(action.payload))
        case MOUSEENTER:
            return state.set("show",true)
        case MOUSELEAVE:
            return state.set("show",false)
        default:
            return state
    }
}