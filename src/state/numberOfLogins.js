import {database, databse} from '../firebase'
import {mapObjectToArray} from '../utils'
import moment from 'moment'

const SETNUMBER = 'logins/SETNUMBER'

const setnumber = (logins) => ({
    type: SETNUMBER,
    logins
})

// `https://fatcash-app.firebaseio.com/users/${this.props.useUid}/transactions/.json`


// export const initNumberOfLogins = () => (dispatch, getState) => {
//
//     const state = getState()
//     database.ref(`users/`).on(
//         'value',
//         (snapshot) => dispatch(
//             setnumber(
//                 mapObjectToArray(snapshot.val()).reverse()
//             )
//         )
//     )
//
// }

export const initNumberOfLogins = () => (dispatch, getState) => {
    database.ref('users').on(
        'value',
        snapshot => {
            const users = mapObjectToArray(snapshot.val())

            const loginDates = (
                mapObjectToArray(
                    users.reduce((reduced, user) => {
                        return {
                            ...reduced,
                            ...user.loginsLogs
                        }
                    }, {})
                ).map(el => moment(el.timestamp).format('YYYY-MM-DD'))
            )

            let dates = {}
            for (let i = 0; i < 7; i++)
                dates[moment().subtract(i, 'days').format('YYYY-MM-DD')] = 0



                const loginsLogs = mapObjectToArray(loginDates.reduce((reduced, date) => {
                    if (reduced[date] !== undefined) // is date from this week
                        reduced[date] = reduced[date] + 1
                    return reduced
                }, dates))

            dispatch(setnumber(loginsLogs))

        })
}

const initialState = {
    logins: []
}

export default (state = initialState, action) => {
    switch (action.type) {
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