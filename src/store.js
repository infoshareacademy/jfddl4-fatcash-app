import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import transactions, {initTransactionsSync} from './state/transactions'
import categoriesIncome, {initCategoriesIncomeSync} from "./state/categoriesIncome";
import categoriesExp, {initCategoriesExpSync} from "./state/categoriesExp";

const reducer = combineReducers({
    transactions,
    categoriesExp,
    categoriesIncome
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)

    )
)

store.dispatch(initTransactionsSync())
store.dispatch(initCategoriesIncomeSync())
store.dispatch(initCategoriesExpSync())