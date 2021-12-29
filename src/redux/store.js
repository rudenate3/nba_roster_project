import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'
import ReduxThunk from 'redux-thunk'

const middleware = [ReduxThunk]

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
