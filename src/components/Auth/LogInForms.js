import React from 'react'
import { auth, googleProvider } from '../../firebase'
import LogInByGoogle from './LogInByGoogle';
import LogInByEmailAndPassword from './LogInByEmailAndPassword';
import CreateUserByEmailAndPassword from './CreateUserByEmailAndPassword';

class LogInForms extends React.Component {
    state = {
        logInEmail: '',
        logInPassword: '',
        createUserEmail: '',
        createUserPassword: '',
        createUserRetypePassword: ''
    }

    logInByGoogle = () => auth.signInWithPopup(googleProvider)
        .catch(e => alert('Something went wrong!'))

    logInByEmailAndPassword = () => auth.signInWithEmailAndPassword(
        this.state.logInEmail,
        this.state.logInPassword
    ).catch(e => alert('Something went wrong!'))

    createUserByEmailAndPassword = () => {
        if(this.state.createUserRetypePassword !== this.state.createUserPassword){
            alert('Passwords dont match!')
            return
        }

        auth.createUserWithEmailAndPassword(
            this.state.createUserEmail,
            this.state.createUserPassword
        ).catch(e => alert('Something went wrong!'))
    }

    onLogInEmailChange = (e, value) => this.setState({ logInEmail: value })
    onLogInPasswodChange = (e, value) => this.setState({ logInPassword: value })

    onCreateUserEmailChange = (e, value) => this.setState({ createUserEmail: value })
    onCreateUserPasswodChange = (e, value) => this.setState({ createUserPassword: value })
    onCreateUserRetypePasswodChange = (e, value) => this.setState({ createUserRetypePassword: value })

    render() {
        return (
            <div>
                <LogInByEmailAndPassword
                    emailValue={this.state.logInEmail}
                    onEmailChange={this.onLogInEmailChange}
                    passwordValue={this.state.logInPassword}
                    onPasswordChange={this.onLogInPasswodChange}
                    onLogInClick={this.logInByEmailAndPassword}
                />
                <LogInByGoogle
                    onLogInClick={this.logInByGoogle}
                />
                <CreateUserByEmailAndPassword
                    emailValue={this.state.createUserEmail}
                    onEmailChange={this.onCreateUserEmailChange}
                    passwordValue={this.state.createUserPassword}
                    onPasswordChange={this.onCreateUserPasswodChange}
                    retypePasswordValue={this.state.createUserRetypePassword}
                    onRetypePasswordChange={this.onCreateUserRetypePasswodChange}
                    onRegisterClick={this.createUserByEmailAndPassword}
                />
            </div>
        )
    }
}
export default LogInForms