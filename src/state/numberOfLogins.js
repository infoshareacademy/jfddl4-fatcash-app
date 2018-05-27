import {database, databse} from '../firebase'
import { mapObjectToArray } from '../utils'

const SETNUMBER = 'logins/SETNUMBER'

const setnumber = (logins) => ({
    type: SETNUMBER,
    logins
})

// `https://fatcash-app.firebaseio.com/users/${this.props.useUid}/transactions/.json`


export const initNumberOfLoginsSync  = () => (dispatch, getState) => {

    const state = getState()
   database.ref(`users/loginLogs`).on(
        'value',
        (snapshot) => dispatch(
            setnumber(
                mapObjectToArray(snapshot.val())
            )
        )
    )
}

const initialState = {
    logins: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case SETNUMBER:
            return {
                ...state,
                logins: action.logins
            }
        default:
            return state
    }
}