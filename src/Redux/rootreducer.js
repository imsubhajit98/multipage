import { combineReducers } from 'redux'
import reducer from './reducerr'

const rootreducer = combineReducers({
    post: reducer,
})

export default rootreducer;