import { createStore, combineReducers, applyMiddleware } from 'redux'
import messageReducer from './reducers/message'
import searchResultReducer from './reducers/searchResult'
import stepIndexReducer from './reducers/stepIndex'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  messageReducer,
  searchResultReducer,
  stepIndexReducer

})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store;