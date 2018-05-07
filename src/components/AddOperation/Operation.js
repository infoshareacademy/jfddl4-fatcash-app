import React from 'react'

import MenuItem from 'material-ui/MenuItem';
import Delete from 'material-ui/svg-icons/action/delete';
import Divider from 'material-ui/Divider'

const Operation = ({date, category, description, value, deleteOperation}) => (



    <div>
        <MenuItem
            primaryText={<div>{date} {category} {description}  {value}</div>}
            rightIcon={
                <Delete
                    onClick={deleteOperation}
                />
            }
        />
        <Divider/>
    </div>

)

export default Operation