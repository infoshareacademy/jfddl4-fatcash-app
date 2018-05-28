import React from 'react';
import {connect} from 'react-redux';
import {logInByEmail, logInByGoogle,remindPassword} from "../../state/auth";
import LogInByGoogle from "./LogInByGoogle";
import LogInByEmail from "./LogInByEmail";
import CreateUser from '../../components/Auth/CreateUser'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';


const style ={
    marginTop:'3%',
    marginBottom:'4%',
    marginLeft:'30%',
    marginRight:'30%',
    textAlign: 'center',


}



const Auth = (props) => (
    <div>
        {
            props.isUserLoggedIn ?
                props.children
                :
                <Paper style={style}
                       rounded={false}
                >
                    <AppBar
                        title="Welcome to Fatcash World"
                        showMenuIconButton={false}
                    />
                    <h5>Sign in by email</h5>
                    <LogInByEmail
                        onLogInHandler={props.logInByEmail}
                        onRemindPasswordClick={props.onRemindPasswordClick}
                    />
                    <br/>
                    <Divider/>
                    <br/>
                    <LogInByGoogle
                        onLogInHandler={props.logInByGoogle}

                    />
                    <br/>
                    <Divider/>
                    <h5>Register new user</h5>
                    <CreateUser/>
                    <br/>
                </Paper>

        }
    </div>
);


const mapStateToProps = state => ({
    isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = dispatch => ({
    logInByGoogle: () => dispatch(logInByGoogle()),
    logInByEmail: (email, password) => dispatch(logInByEmail(email, password)),
    onRemindPasswordClick:(email)=> dispatch(remindPassword(email))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);
