import React from 'react'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom'


const SideBar = (props) => (
    <Drawer
        docked={false}
        open={props.isSideBarOpen}
        onRequestChange={props.onRequestSideBarChange}
    >
        <Link to={'/'}><MenuItem> Dashboard </MenuItem></Link>
        <Link to={'/operation-list'}><MenuItem> Operations list </MenuItem></Link>
        <Link to={'/add-new-operation'}><MenuItem> Add new operation </MenuItem></Link>
    </Drawer>
)

export default SideBar