import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import transactions, {initTransactionsSync} from './state/transactions'
import categoriesIncome, {initCategoriesIncomeSync} from "./state/categoriesIncome";
import categoriesExp, {initCategoriesExpSync} from "./state/categoriesExp";
import auth, {initAuthUserSync} from "./state/auth";
import createUser from './state/createUser'
import numberOfLogins, {initNumberOfLogins} from './state/numberOfLogins'

const reducer = combineReducers({
    transactions,
    categoriesExp,
    categoriesIncome,
    auth,
    createUser,
    numberOfLogins
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)

    )
)

store.dispatch(initCategoriesIncomeSync())
store.dispatch(initCategoriesExpSync())
store.dispatch(initAuthUserSync())
store.dispatch(initNumberOfLogins())

