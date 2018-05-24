import React from 'react'
import {connect} from 'react-redux'
import {TextField, RaisedButton} from 'material-ui'
import {addEmail, addPassword, addRetypedPassword} from "../../state/createUser";

const CreateUser = (props) => (

    <div>
        <h1>{props.email}</h1>

        <TextField
            onChange={props.onCreateEmailHandler}
        />
        <TextField
            onChange={props.onCreatePasswordHandler}
        />
        <TextField
            onChange={props.onCreateRetypedPasswordHandler}
        />
        <RaisedButton
            label={"Create User"}
            primary={true}

        />
    </div>
)

const mapStateToProps = (state) => ({

    email: state.createUser.email

})

const mapDispatchToProps = (dispatch) => ({

    onCreateEmailHandler: (event, value) => dispatch(addEmail(value)),
    onCreatePasswordHandler: (event, value) => dispatch(addPassword(value)),
    onCreateRetypedPasswordHandler: (event, value) => dispatch(addRetypedPassword(value))


})


export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)

