import {
    FOCUSEDIN,
    BLUROUT,
    GETHEADERLIST,
    MOUSEENTER,
    MOUSELEAVE,
    CHANGEPAGE
} from './constants'
import {
    fromJS,
    toJS
} from 'immutable'
const defaultState = fromJS({
    focused: false,
    headerList: [],
    show: false,
    page: 1,
    totalPage: 4,
    
})
export const reducerHeader = (state = defaultState, action) => {
    switch (action.type) {
        case FOCUSEDIN:
            return state.set("focused", true)
        case BLUROUT:
            return state.set("focused", false)
        case GETHEADERLIST:
            return state.set("headerList", fromJS(action.payload))
        case MOUSEENTER:
            return state.set("show", true)
        case MOUSELEAVE:
            return state.set("show", false)
        case CHANGEPAGE:
            return state.set("page",action.payload)
        default:
            return state
    }
}