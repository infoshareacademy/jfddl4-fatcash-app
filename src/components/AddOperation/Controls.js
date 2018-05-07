import React from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'

const Controls = ({onChangeHandlerdate,newcategoryValue,onChangeHandlercategory, newdateValue, onClickHandler, onChangeHandlerdescription,newdescriptionValue,onChangeHandlervalue, newvalueValue}) => (

    <Paper>
        <TextField
            onChange={onChangeHandlerdate}
            value={newdateValue}
            name={'new-date'}
            placeholder={'date'}
            fullWidth={true}
        />
        <Divider />
        <TextField
            onChange={onChangeHandlercategory}
            value={newcategoryValue}
            name={'new-category'}
            placeholder={'category'}
            fullWidth={true}
        />
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