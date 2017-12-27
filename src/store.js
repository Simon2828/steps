import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import messageReducer from './reducers/message'
import searchResultReducer from './reducers/searchResult'
import stepIndexReducer from './reducers/stepIndex'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  messageReducer,
  searchResultReducer,
  stepIndexReducer,

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
  
)

export default store;