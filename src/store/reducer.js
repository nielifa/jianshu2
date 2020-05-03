import {combineReducers} from 'redux-immutable'
import {reducerHeader} from './../common/header/store/reducer' 
import {reducerHome} from './../pages/home/store/reducer'
import {reducerDetail} from './../pages/detail/store/reducer'
import {reducerLogin} from './../pages/login/store/reducer'
const reducer=combineReducers({
    reducerHeader,
    reducerHome,
    reducerDetail,
    reducerLogin
})
export default reducer