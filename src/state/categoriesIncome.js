import {database, databse} from '../firebase'
import { mapObjectToArray } from '../utils'

const SET = 'categoriesIncome/SET'

const set = (categories) => ({
    type: SET,
    categories
})



export const initCategoriesIncomeSync  = () => (dispatch, getState) => {
    getState().auth.isUserLoggedIn === true ?  database.ref(`users/${getState().auth.user.uid}/categories/income`).on(
        'value',
        (snapshot) => dispatch(
            set(
                mapObjectToArray(snapshot.val()).reverse()
            )
        )
    ) : false

}

const initialState = {
    categories: []
}

export default (state = initialState, action) => {
    switch (action.type){
        case SET:
            return {
                ...state,
                categories: action.categories
            }
        default:
            return state
    }
}
