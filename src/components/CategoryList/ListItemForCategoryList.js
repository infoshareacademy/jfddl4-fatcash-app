import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'
import {Link} from 'react-router-dom'
const styles = {
    textDecoration:'none',
};

const ListItemForCategoryList = (props) => (
    <Link to={`/operation-list/${props.item.key}`} style={styles}>
        <MenuItem
            rightIcon={<RemoveRedEye/>}
        >
            {props.item.name}
        </MenuItem>
    </Link>
)

export default ListItemForCategoryList