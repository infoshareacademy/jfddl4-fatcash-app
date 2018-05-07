import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginLeft:50,
        marginBottom: 16,
    },
};

const style = {
    margin: 10,
    marginLeft:50,
};


class AddCategory extends React.Component {
    render() {
        return (
            <div>
                <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                    <RadioButton
                        value="light"
                        label="Income"
                        style={styles.radioButton}

                    />
                    <RadioButton
                        value="not_light"
                        label="Expenditure"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <TextField
                    hintText="Type your cattegory"
                    fullWidth={true}
                /><br/>
                <RaisedButton label="Add category" primary={true} style={style} fullWidth={true}   />


            </div>
        )
    };
}


export default AddCategory;