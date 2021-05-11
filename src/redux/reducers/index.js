import { combineReducers } from 'redux'
import globalReducer from './global'

const rootReducer = combineReducers({
  stories: globalReducer,
})

export default rootReducer