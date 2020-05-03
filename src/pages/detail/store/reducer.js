import {fromJS} from 'immutable'
import {GETDETAILLIST} from './constants'
let defaultState=fromJS({
    detailList:{}
})
export const reducerDetail = (state =defaultState , action) => {
    switch (action.type) {
        case GETDETAILLIST:
            return state.set("detailList",fromJS(action.payload))
        default:
            return state
    }
}