import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'


const LogInByGoogle = props => {
    return (
        <div>
            <RaisedButton
                label={'Log in by Google'}
                secondary={true}
                onClick={props.onLogInHandler}
            />
        </div>
    );
};


export default LogInByGoogle;
