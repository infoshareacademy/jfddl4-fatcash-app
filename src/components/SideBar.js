import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import wallet from '../img/wallet.png';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import MyClock from './Clock'
import UserAvatar from '../../src/components/Auth/Authavatar'

const imgstyle = {
    marginTop: '3vh',
    marginBottom: '3vh'
}
const menuitemstyl = {
    fontSize: 16,
    fontWeight: 500,
    textShadow: "0px 1px white",

}
const iconStyles = {
    marginRight: 15,
    marginLeft: 28,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16
};
const linkstyles = {
    textAlign: "left",
    textDecoration: 'none',
    background: '#f3f3f5',
};
const draverstyle = {
    backgroundColor: "white"
}

const SideBar = (props) => (

    <Drawer
        docked={false}
        open={props.isSideBarOpen}
        onRequestChange={props.onRequestSideBarChange}
        width={260}
        containerStyle={draverstyle}
    >
        <UserAvatar/>
        <Divider/>
        <center><img src={wallet} style={imgstyle} alt="Fatcash Logo"/></center>
        <MyClock/>
        <Divider/>
        <Link onClick={props.onRequestSideBarChange} style={linkstyles} to={'/'}><MenuItem
            style={menuitemstyl}><FontIcon
            className="material-icons" style={iconStyles}
            color={'#3aa1ba'}>trending_up</FontIcon>Dashboard</MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={linkstyles} to={'/operation-list'}><MenuItem
            style={menuitemstyl}><FontIcon
            className="material-icons" style={iconStyles}
            color={'#3aa1ba'}>receipt</FontIcon>Operations
            Lists</MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={linkstyles} to={'/add-new-operation'}><MenuItem
            style={menuitemstyl}><FontIcon
            className="material-icons" style={iconStyles}
            color={'#3aa1ba'}>payment</FontIcon>Add
            Operation</MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={linkstyles} to={'/add-category'}><MenuItem
            style={menuitemstyl}><FontIcon
            className="material-icons" style={iconStyles}
            color={'#3aa1ba'}>input</FontIcon>Add
            Category</MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={linkstyles} to={'/category-list'}><MenuItem
            style={menuitemstyl}><FontIcon
            className="material-icons" style={iconStyles}
            color={'#3aa1ba'}>search</FontIcon>Category
            List</MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={linkstyles} to={'/data-chart'}><MenuItem
            style={menuitemstyl}><FontIcon
            className="material-icons" style={iconStyles}
            color={'#3aa1ba'}>star</FontIcon> Bilans chart
            </MenuItem></Link>
        <Divider/>


    </Drawer>

)

export default SideBar