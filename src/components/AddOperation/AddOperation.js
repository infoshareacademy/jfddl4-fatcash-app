import React from 'react'
import {mapObjectToArray, transactionFilterAndMap} from '../../utils'
import Controls from "./Controls";
import Snackbar from 'material-ui/Snackbar';
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import moment from "moment/moment";
import {connect} from "react-redux";
import categoriesIncome from "../../state/categoriesIncome";


class AddOperation extends React.Component {
    state = {
        //  --------------------------For save transaction
        category: "",
        date: "",
        description: "",
        income: true,
        value: "",
        image: '',
        name: "",
        // -------------------
        open: false, // for snackbar
        transactionId: this.props.match.params.transactionId || '' // for hyperlinks of operations
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    newCategoryHandler = (el, key, val) => {
        this.setState({category: val})
    }
    newOperationHandler = (stateProperty, value) => this.setState({[stateProperty]: value})

    saveTaskToDatabase = () => {

        this.state.value.length === 0 || this.state.category.length === 0 ? alert("You must add value and choose category !!") :

            fetch(`https://fatcash-app.firebaseio.com/users/${this.props.userUid}/transactions/.json`,
                {
                    method: 'POST',
                    body: JSON.stringify
                    (
                        {
                            category: this.state.category,
                            date: Date.now(),
                            description: this.state.description,
                            income: this.state.income,
                            value: this.state.value * 1,
                            image: this.state.image
                        }
                    )
                }
            ).then(this.loadTransaction).then(() => {
                this.setState({
                    open: true
                })
            })
    }
    render() {

        return (
            <Paper style={{margin: "20px", padding: '20px'}}>

                    <Controls
                        newIncomeHandler={(e, val) => this.newOperationHandler('income', val)}
                        newImageHandler={(e, val) => this.newOperationHandler('image', val)}
                        newCategoryHandler={this.newCategoryHandler}
                        newDescriptionHandler={(e, val) => this.newOperationHandler('description', val)}
                        newValueHandler={(e, val) => this.newOperationHandler('value', val)}
                        saveTaskToDatabase={this.saveTaskToDatabase}
                        income={this.state.income}
                        categoriesInc={this.props.categoriesInc}
                        category={this.state.category}
                        categoriesExp={this.props.categoriesExp}
                        description={this.state.description}
                        value={this.state.value}
                        image={this.state.image}
                    />
                <Snackbar
                    open={this.state.open}
                    message="  Operation succesfully added to your list"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    categoriesInc: state.categoriesIncome.categories,
    categoriesExp: state.categoriesExp.categories,
    userUid: state.auth.user.uid,
    transactions: state.transactions.transactions
})

export default connect(
    mapStateToProps
)(AddOperation)