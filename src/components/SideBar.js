import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import photo from '../img/photo.jpg';
import wallet from '../img/wallet.png';

const styles={
        textDecoration: 'none',
        background: '#f3f3f5',
        paddingTop:'20px',
    backgroundPosition:'cover',
    };

const SideBar = (props) => (

    <Drawer
        docked={false}
        open={props.isSideBarOpen}
        onRequestChange={props.onRequestSideBarChange}
        width={200}
        img={{backgroundImage: `url(${photo}`}}

    > <center><img src={wallet} alt="Fatcash Logo"/></center>
        <Link onClick={props.onRequestSideBarChange} style={styles} to={'/'}><MenuItem> Dashboard </MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={styles} to={'/operation-list'}><MenuItem> Operations list </MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={styles} to={'/add-new-operation'}><MenuItem> Add new operation </MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={styles} to={'/add-category'}><MenuItem> Add category </MenuItem></Link>
        <Link onClick={props.onRequestSideBarChange} style={styles} to={'/category-list'}><MenuItem> Category List </MenuItem></Link>

    </Drawer>

)

export default SideBar