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
                <center>
                    <TextField
                        hintText={"Email"}
                        onChange={this.onLoginHandler}
                        name={"login"}
                    />
                    <br/>
                    <TextField
                        hintText={"Password"}
                        onChange={this.onPasswordHandler}
                        name={"pass"}
                        type={'password'}
                    />
                    <br/>
                    <RaisedButton
                        label={'Submit'}
                        primary={true}
                        onClick={() =>
                            this.props.onLogInHandler(this.state.login, this.state.password)}
                    />
                </center>
            </div>
        );
    }
};


export default LoginByEmail;