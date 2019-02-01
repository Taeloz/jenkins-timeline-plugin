import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './rootReducer'
import { wfapiBuildSagaWatcher } from './wfapi/sagas'
import createSagaMiddleware from 'redux-saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(wfapiBuildSagaWatcher)

export default store
