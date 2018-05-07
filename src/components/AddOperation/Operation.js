import React from 'react'

import MenuItem from 'material-ui/MenuItem';
import Delete from 'material-ui/svg-icons/action/delete';
import Divider from 'material-ui/Divider'

const Operation = ({category, description, value, deleteOperation}) => (



    <div>
        <MenuItem
            primaryText={<div> {category} {description}  {value}</div>}
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