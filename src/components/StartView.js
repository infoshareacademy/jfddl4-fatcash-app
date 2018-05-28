import React from 'react'
import {Paper} from 'material-ui'
import {connect} from "react-redux";
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';


const StartView = (props) => (

    <Paper style={{margin: "20px", padding: '20px'}}>




        {!props.userPhotoUrl?
            <img style={{maxWidth: '200px'}} src={`https://openclipart.org/image/2400px/svg_to_png/211821/matt-icons_preferences-desktop-personal.png`}/>
            :
            <img style={{maxWidth: '200px'}} src={props.userPhotoUrl}/>}

        <h1>Hello {props.displayName ? props.displayName : 'User'}, welcome to FatCash application! </h1>
        <h2>We provide user instructions below...</h2>
        <ul>
            <li> Dashboard - hear yo can see two chat connected with databse, in first chart you can see number of logs
                per day, in second you see number of transactions by categories
            </li>

            <li> Bilans chart - see you icncomes vs expences</li>

            <li> Operation List - hear you can filter your operations by category/value/description</li>

            <li> Add new oppertation - here you can add new operation and see full operation list</li>

            <li> Cateogry list - hear you can link to operation list filtered by category</li>

            <li> Add Category - here you can add category</li>
        </ul>

        <h2>We belive that our app will help you to save a lot of money !</h2>
    </Paper>
)


const mapStateToProps = state => ({
    userPhotoUrl: state.auth.user.photoURL,
    displayName: state.auth.user.displayName,


})


export default connect(
    mapStateToProps
)(StartView);