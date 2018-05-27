import React from 'react'

import { TextField, RaisedButton } from 'material-ui'

import PaperRefined from '../PaperRefined'

const LogInByEmailAndPassword = (props) => (
    <PaperRefined centered={true}>
        <h4>Log in with exisiting user!</h4>
        <TextField
            name={'email'}
            type={'email'}
            placeholder={'Type your e-mail!'}
            value={props.emailValue}
            onChange={props.onEmailChange}
            fullWidth={true}
        />
        <TextField
            name={'password'}
            type={'password'}
            placeholder={'Type your password!'}
            value={props.passwordValue}
            onChange={props.onPasswordChange}
            fullWidth={true}
        />
        <RaisedButton
            label={'Login!'}
            onClick={props.onLogInClick}
        />
    </PaperRefined>
)

export default LogInByEmailAndPassword
