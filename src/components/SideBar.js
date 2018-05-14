import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom'


const styles={
        textDecoration: 'none',
        background: '#f3f3f5',
        paddingTop:'20px',
    };



const SideBar = (props) => (
    <Drawer
        docked={false}
        open={props.isSideBarOpen}
        onRequestChange={props.onRequestSideBarChange}
        width={200}
    >
        <Link style={styles} to={'/'}><MenuItem> Dashboard </MenuItem></Link>
        <Link style={styles} to={'/operation-list'}><MenuItem> Operations list </MenuItem></Link>
        <Link style={styles} to={'/add-new-operation'}><MenuItem> Add new operation </MenuItem></Link>
        <Link style={styles}to={'/add-category'}><MenuItem> Add category </MenuItem></Link>


    </Drawer>
)

export default SideBar