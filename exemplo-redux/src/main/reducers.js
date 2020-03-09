import { combineReducers } from 'redux'
import categoryReducer from '../category/categoryReducer'

const rootReducer = combineReducers({
    exemplo: categoryReducer
})

export default rootReducer