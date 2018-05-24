import React from 'react';
import {connect} from 'react-redux';
import {logInByEmail, logInByGoogle} from "../../state/auth";
import LogInByGoogle from "./LogInByGoogle";
import LogInByEmail from "./LogInByEmail";
 import CreateUser from '../../components/Auth/CreateUser'


const Auth = (props) => (
    <div>
        {
            props.isUserLoggedIn ?
                props.children
                :
                <div>
                    <LogInByEmail
                        onLogInHandler={props.logInByEmail}
                    />
                    <LogInByGoogle
                        onLogInHandler={props.logInByGoogle}

                    />
                    <CreateUser/>
                </div>
        }
    </div>
);


const mapStateToProps = state => ({
    isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = dispatch => ({
    logInByGoogle: () => dispatch(logInByGoogle()),
    logInByEmail: (email, password) => dispatch(logInByEmail(email, password))

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);
