import {database, databse} from '../firebase'
import { mapObjectToArray } from '../utils'

const SETNUMBER = 'logins/SETNUMBER'

const setnumber = (logins) => ({
    type: SETNUMBER,
    logins
})

// `https://fatcash-app.firebaseio.com/users/${this.props.useUid}/transactions/.json`


export const initNumberOfLogins  = () => (dispatch, getState) => {

    const state = getState()
    state.auth.isUserLoggedIn === true ? database.ref(`users/${state.auth.user.uid}/loginsLogs`).on(
        'value',
        (snapshot) => dispatch(
            setnumber(
                mapObjectToArray(snapshot.val()).reverse()
            )
        )
    ) : false

}

const initialState = {
    logins: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case SETNUMBER:
         console.log(action.logins)
            return {
                ...state,
                logins: action.logins
            }
        default:
            return state
    }
}