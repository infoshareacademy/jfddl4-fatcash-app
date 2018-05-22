import {database, databse} from '../firebase'
import { mapObjectToArray } from '../utils'

const SET = 'categoriesIncome/SET'

const set = (categories) => ({
    type: SET,
    categories
})

export const initCategoriesIncomeSync  = () => (dispatch, getState) => {
    database.ref('/categories/income').on(
        'value',
        (snapshot) => dispatch(
            set(
                mapObjectToArray(snapshot.val()).reverse()
            )
        )
    )

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
