import {auth} from "../firebase";


const ADDEMAIL = 'createUser/ADDEMAIL';
const ADDPASSWORD = 'createUser/ADDPASSWORD';
const ADDRETYPEDPASSWORD = 'createUser/ADDRETYPEDPASSWORD';
const SENDUSERTODATABASE = 'createUser/SENDUSERTODATABASE';


export const addEmail = (email) => ({
    type: ADDEMAIL,
    email
});
export const addPassword = (password) => ({
    type: ADDPASSWORD,
    password
});

export const addRetypedPassword = (rpassword) => ({
    type: ADDRETYPEDPASSWORD,
    rpassword
});

export const sendUserToDatabase = () => ({
    type: SENDUSERTODATABASE,

});

const initialState = {
    email: "",
    password: "",
    retypedPassword: "",
    warning: ""
};
export default (state = initialState, action) => {

    switch (action.type) {
        case ADDEMAIL:
            return {
                ...state,
                email: action.email
            };
        case ADDPASSWORD:
            return {
                ...state,
                password: action.password
            };
        case ADDRETYPEDPASSWORD:
            return {
                ...state,
                retypedPassword: action.rpassword
            };
        case SENDUSERTODATABASE:

            if (state.password !== state.retypedPassword) {
                alert("Please type the same password")
                return state
            }
            else if (!state.email || !state.password || !state.retypedPassword) {
                alert("Please fill all fields")
                return state
            }
            else {

                return auth.createUserWithEmailAndPassword(state.email, state.password)
            }
        default:
            return state
    }
}

