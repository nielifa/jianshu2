import {fromJS} from 'immutable'
import {CHANGELOGIN,EXITLOGIN} from './constants'
const defaultState=fromJS({
    login:false
})
export const reducerLogin = (state =defaultState , action) => {
    switch (action.type) {
        case CHANGELOGIN:
            return state.set("login",action.payload)
        case EXITLOGIN:
            return state.set("login",action.payload)
        default:
            return state
    }
}