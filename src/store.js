import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import transactions, {initTransactionsSync} from './state/transactions'
import categoriesIncome, {initCategoriesIncomeSync} from "./state/categoriesIncome";
import categoriesExp, {initCategoriesExpSync} from "./state/categoriesExp";
import auth, {initAuthUserSync} from "./state/auth";

const reducer = combineReducers({
    transactions,
    categoriesExp,
    categoriesIncome,
    auth
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
store.dispatch(initAuthUserSync())
