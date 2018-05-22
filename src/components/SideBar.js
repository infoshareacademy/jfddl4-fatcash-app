import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import wallet from '../img/wallet.png';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';


const iconStyles = {
    marginRight: 20,
    paddingTop: '20px',
    marginHeight:'auto'

};

const styles = {
    textDecoration: 'none',
    background: '#f3f3f5',
    paddingBottom: 'auto',
    paddingTop: 'auto',
    marginHeight:'auto'
    //backgroundPosition: 'cover',
    //fontcolor: "white",

};


const draverstyle = {
    backgroundColor: "#CCDCE5",

}

const SideBar = (props) => (

    <Drawer
        docked={false}
        open={props.isSideBarOpen}
        onRequestChange={props.onRequestSideBarChange}
        width={250}
        containerStyle={draverstyle}

    >
        <center><img src={wallet} alt="Fatcash Logo"/></center>
        <Divider/>

        <Link onClick={props.onRequestSideBarChange} style={styles} to={'/'}><MenuItem><FontIcon
            className="material-icons" style={iconStyles}
            color={'#3aa1ba'}>trending_up</FontIcon>DASHBOARD</MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={styles} to={'/operation-list'}><MenuItem><FontIcon
            className="material-icons" style={iconStyles}
            color={'#3aa1ba'}>receipt</FontIcon>OPERATIONS
            LISTS</MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={styles} to={'/add-new-operation'}><MenuItem><FontIcon
            className="material-icons" style={iconStyles}
            color={'#3aa1ba'}>payment</FontIcon>ADD
            OPERATION</MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={styles} to={'/add-category'}><MenuItem><FontIcon
            className="material-icons" style={iconStyles}
            color={'#3aa1ba'}>input</FontIcon>ADD
            CATTEGORY</MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={styles} to={'/category-list'}><MenuItem><FontIcon
            className="material-icons" style={iconStyles}
            color={'#3aa1ba'}>search</FontIcon>CATTEGORY
            LIST</MenuItem></Link>


    </Drawer>

)

export default SideBar