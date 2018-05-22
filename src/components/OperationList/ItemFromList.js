import React from 'react'

import MenuItem from "material-ui/MenuItem"
import RaisedButton from "material-ui/RaisedButton"
import moment from "moment"

const ItemFromList = ({el, handleOpen, categoryName}) => (
    <MenuItem
        secondaryText={`${categoryName} || ${el.income === true ? "Income" : "Expence"} || ${moment(el.date).format('MMMM Do YYYY, h:mm:ss a')}`}
    >
        Value: {el.value}
        &ensp;
        <RaisedButton
            style={{margin: '10px'}}
            label="Clik here to read description"
            onClick={() => {
                handleOpen(el);
            }}
        />
    </MenuItem>


)

export default ItemFromList