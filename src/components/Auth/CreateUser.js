import React from 'react'
import {connect} from 'react-redux'
import {TextField, RaisedButton} from 'material-ui'
import {addEmail, addPassword, addRetypedPassword,sendUserToDatabase} from "../../state/createUser";


const CreateUser = (props) => (

    <div>
        <h1>{props.email}</h1>

        <TextField
            onChange={props.onCreateEmailHandler}
            name={"email"}
            placeholder={"Type Your email"}
        />
        <TextField
            onChange={props.onCreatePasswordHandler}
            name={"password"}
            placeholder={"Type Your password"}
        />
        <TextField
            onChange={props.onCreateRetypedPasswordHandler}
            name={"retypedpassword"}
            placeholder={"Retype Your password"}
        />
        <RaisedButton
            label={"Create User"}
            primary={true}
            onClick={props.sendUser}
        />
    </div>
)

const mapStateToProps = (state) => ({

    email: state.createUser.email

})

const mapDispatchToProps = (dispatch) => ({

    onCreateEmailHandler: (event, value) => dispatch(addEmail(value)),
    onCreatePasswordHandler: (event, value) => dispatch(addPassword(value)),
    onCreateRetypedPasswordHandler: (event, value) => dispatch(addRetypedPassword(value)),
    sendUser:()=>dispatch(sendUserToDatabase())

})


export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)

