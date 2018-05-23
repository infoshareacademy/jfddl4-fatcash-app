import React from 'react';
import {connect} from 'react-redux';
import {logInByGoogle} from "../../state/auth";
import LogInByGoogle from "./LogInByGoogle";

const Auth = (props) => (
    <div>
        {
            props.isUserLoggedIn ?
                props.children
                :
                <LogInByGoogle
                    onLogInHandler = {props.logInByGoogle}

                />
        }
    </div>
);





const mapStateToProps = state => ({
    isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = dispatch => ({
    logInByGoogle: () => dispatch(logInByGoogle())

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);
