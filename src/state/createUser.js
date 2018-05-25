const ADDEMAIL = 'createUser/ADDEMAIL';
const ADDPASSWORD = 'createUser/ADDPASSWORD';
const ADDRETYPEDPASSWORD = 'createUser/ADDRETYPEDPASSWORD';


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




const initialState = {
    email: "",
    password: "",
    retypedPassword: ""
};

export default (state=initialState,action)=>{

    switch (action.type) {
        case ADDEMAIL:
            return {
                ...state,
                email:action.email
            }
        case ADDPASSWORD:
            return {
                ...state,
                password:action.password

            }
        case ADDRETYPEDPASSWORD:
            return {
                ...state,
                retypedPassword:action.rpassword
            }
            default:
            return state

    }
}