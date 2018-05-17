import {database, databse} from '../firebase'
import { mapObjectToArray } from '../utils'

const SET = 'transactions/SET'

const set = (transactions) => ({
    type: SET,
    transactions
})

export const initTransactionsSync  = () => (dispatch, getState) => {
    database.ref('/transactions').on(
        'value',
        (snapshot) => dispatch(
            set(
                mapObjectToArray(snapshot.val())
            )
        )
    )

}

const initialState = {
    transactions: null
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
