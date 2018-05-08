import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'
import DropDownMenuItem from './DropdownMenu'

const Controls = ({newValue,newcategoryValue,onChangeHandlercategory, onClickHandler, onChangeHandlerdescription,newdescriptionValue,onChangeHandlervalue, newvalueValue}) => (

    <Paper>


        <DropDownMenuItem/>
        <Divider />
        <TextField
            onChange={onChangeHandlerdescription}
            value={newdescriptionValue}
            name={'new-description'}
            placeholder={'description'}
            fullWidth={true}
        />
        <Divider />
        <TextField
            onChange={onChangeHandlervalue}
            value={newvalueValue}
            name={'new-value'}
            placeholder={'value'}
            fullWidth={true}
        />

        <RaisedButton
            onClick={onClickHandler}
            primary={true}
            fullWidth={true}
            label={'ADD'}
        />
    </Paper>
)

export default Controls