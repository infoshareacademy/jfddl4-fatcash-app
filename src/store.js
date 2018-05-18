import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import transactions, {initTransactionsSync} from './state/transactions'

const reducer = combineReducers({
    transactions
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)

    )
)

store.dispatch(initTransactionsSync())