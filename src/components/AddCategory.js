import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginLeft: 50,
        marginBottom: 16,
    },
};

const style = {
    margin: 10,
    marginLeft: 50,
};


class AddCategory extends React.Component {
    state = {
        selectedKindOfCategory: 'exp'
    }

    render() {
        return (
            <div>
                <RadioButtonGroup
                    name="shipSpeed"
                    defaultSelected="exp"
                    onChange={(e, value) => this.setState({selectedKindOfCategory: value})}
                >
                    <RadioButton
                        value="income"
                        label="income"
                        style={styles.radioButton}
                    />
                    <RadioButton
                        value="exp"
                        label="expenses"
                        style={styles.radioButton}
                    />
                </RadioButtonGroup>
                <TextField
                    hintText="Type your cattegory"
                    fullWidth={true}
                />
                <br/>
                <RaisedButton
                    label="Add category"
                    primary={true} style={style}
                    fullWidth={true}
                    onClick
                />
            </div>
        )
    };
}


export default AddCategory;