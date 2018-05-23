import React from 'react'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';
import Paper from 'material-ui/Paper';
import {connect} from "react-redux";

const styles = {
    block: {
        maxWidth: 250,
    },
    radioButton: {
        marginTop:30,
        marginLeft: 50,
        marginBottom: 10,
    },
};
const style = {
    margin: 15,
    marginLeft: 50,
};
class AddCategory extends React.Component {
    state = {
        selectedKindOfCategory: 'exp',
        newCategoryName: '',
        open: false
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    saveNewCategory = () => {
        fetch(`https://fatcash-app.firebaseio.com/users/${this.props.userUid}/categories/` + this.state.selectedKindOfCategory + '/.json', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.newCategoryName
                }),
            }
        ).then(() => {
            this.setState({
                newCategoryName: '',
                open: true
            })
        })
    }
    newTaskHandler = (event, value) => {
        this.setState({
            newCategoryName: value
        })
    }

    onNewMessageChangeHandler = (e, value) => this.setState({newCategoryName: value})

    render() {
        return (
            <div>
                <Paper style={styles} zDepth={3} rounded={true}>
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
                    onChange={this.newTaskHandler}
                    value={this.state.newCategoryName}
                />

                <RaisedButton
                    label="Add category"
                    primary={true}
                    fullWidth={true}
                    onClick={this.saveNewCategory}
                    disabled={this.state.newCategoryName ? false : true}
                />
                <Snackbar
                    open={this.state.open}
                    message="  Cattegory added to yours list of cattegories"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
                </Paper>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    userUid: state.auth.user.uid,
    transactions: state.transactions.transactions
})

export default connect(
    mapStateToProps
)(AddCategory)