import { combineReducers } from 'redux'
import categoriesReducer from './categories'
import chaptersReducer from './chapters'
import storiesReducer from './stories'
import usersReducer from './users'
import webReducer from './web'

const rootReducer = combineReducers({
  stories: storiesReducer,
  categories: categoriesReducer,
  chapters: chaptersReducer,
  users: usersReducer,
  web: webReducer
})

export default rootReducer