import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AddOperation from "./AddOperation";

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
                        label="icome"
                        style={styles.radioButton}
                        onChange={alert(icome)}

                    />
                    <RadioButton
                        value="not_light"
                        label="expenses"
                        style={styles.radioButton}
                        onChange={alert(expenses)}
                    />
                </RadioButtonGroup>
                <TextField
                    hintText="Type your cattegory"
                    fullWidth={true}
                /><br/>
                <RaisedButton label="Add category"
                              primary={true} style={style}
                              fullWidth={true}
                              onClick


                />


            </div>
        )
    };
}


export default AddCategory;