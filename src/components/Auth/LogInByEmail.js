import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'


const LoginByEmail = props => {
    return (
        <div>
            <RaisedButton
                label={'Log in by email'}
                onClick={() => {
                    props.onLogInHandler('test@test.pl', 'password')
                }}
            />
        </div>
    );
};


export default LoginByEmail;
