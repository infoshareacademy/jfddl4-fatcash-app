import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'


const LogInByGoogle = props => {
    return (
        <div>
            <center>
                <RaisedButton
                    label={'Google login'}
                    secondary={true}
                    onClick={props.onLogInHandler}
                />
            </center>
        </div>
    );
};


export default LogInByGoogle;