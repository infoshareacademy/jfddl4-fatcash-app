import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'
import {Link} from 'react-router-dom'
import moment from 'moment'



const ListItemForOperationList = (props) => (
    <Link to={`/operation/${props.k}`}>
        <MenuItem
            rightIcon={<RemoveRedEye/>}

            secondaryText={`Date ${moment(props.date).format('MMMM Do YYYY, h:mm:ss a')}`}
        >
            {`Category: ${props.category} Value: ${props.cash}`}

        </MenuItem>
    </Link>
)

export default ListItemForOperationList