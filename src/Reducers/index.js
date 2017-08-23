import {combineReducers} from 'redux';
import messages from './messages/messages'
import locale from './locale/locale'

const reducers= combineReducers({
    messages,
    locale
})

export default reducers