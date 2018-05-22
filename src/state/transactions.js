import {database, databse} from '../firebase'
import { mapObjectToArray } from '../utils'

const SET = 'transactions/SET'

const set = (transactions) => ({
    type: SET,
    transactions
})



export const initTransactionsSync  = () => (dispatch, getState) => {

    const state = getState()
    state.auth.isUserLoggedIn === true ?database.ref(`users/${state.auth.user.uid}/transactions`).on(
        'value',
        (snapshot) => dispatch(
            set(
                mapObjectToArray(snapshot.val()).reverse()
            )
        )
    ) : false

}

const initialState = {
    transactions: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET:
            return {
                ...state,
                transactions: action.transactions
            }
        default:
            return state
    }
}
