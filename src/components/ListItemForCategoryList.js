import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'
import {Link} from 'react-router-dom'


const ListItemForCategoryList = (props) => (
    <Link to={`/filtered-category-list/${props.value}`}>
        <MenuItem
            rightIcon={<RemoveRedEye/>}
        >
            {props.value}
        </MenuItem>
    </Link>
)

export default ListItemForCategoryList