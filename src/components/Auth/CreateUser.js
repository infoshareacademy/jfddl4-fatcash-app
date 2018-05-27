import React from 'react'
import {connect} from 'react-redux'
import {TextField, RaisedButton} from 'material-ui'
import {addEmail, addPassword, addRetypedPassword,sendUserToDatabase} from "../../state/createUser";


const CreateUser = (props) => (

    <div>
        <center>
            <h1>{props.warn}</h1>

            <TextField
                onChange={props.onCreateEmailHandler}
                name={"email"}
                hintText={"Type Your email"}

            />
            <br/>
            <TextField
                onChange={props.onCreatePasswordHandler}
                name={"password"}
                hintText={"Type Your password"}
                type={'password'}
            />
            <br/>
            <TextField
                onChange={props.onCreateRetypedPasswordHandler}
                name={"retypedpassword"}
                hintText={"Retype Your password"}
                type={'password'}
            />
            <br/>
            <RaisedButton
                label={"Register"}
                primary={true}
                onClick={props.sendUser}
            />
        </center>
    </div>
)

const mapStateToProps = (state) => ({

    email: state.createUser.email,
    warn:state.createUser.warning
})

const mapDispatchToProps = (dispatch) => ({

    onCreateEmailHandler: (event, value) => dispatch(addEmail(value)),
    onCreatePasswordHandler: (event, value) => dispatch(addPassword(value)),
    onCreateRetypedPasswordHandler: (event, value) => dispatch(addRetypedPassword(value)),
    sendUser:()=>dispatch(sendUserToDatabase())

})


export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)
