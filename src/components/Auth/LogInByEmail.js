import React from 'react';

import {TextField, RaisedButton} from 'material-ui'

class LoginByEmail extends React.Component {


    state = {

        login: "",
        password: ""
    }


    onLoginHandler = (event, value) => (

        this.setState({
            login: value
        })
    )
    onPasswordHandler = (event, value) => (

        this.setState({
            password: value
        })
    )
    render() {

        return (
            <div>
                <TextField

                    onChange={this.onLoginHandler}


                />
                <TextField

                    onChange={this.onPasswordHandler}


                />

                <RaisedButton
                    label={'Log in by email'}
                    onClick={() =>
                    this.props.onLogInHandler(this.state.login, this.state.password)}

                />
            </div>
        );
    }
};


export default LoginByEmail;
