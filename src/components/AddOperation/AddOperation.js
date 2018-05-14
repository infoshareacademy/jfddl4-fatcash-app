import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import moment from 'moment'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import SelectField from 'material-ui/SelectField'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog';
import Pagination from 'material-ui-pagination';
import {mapObjectToArray, transactionFilterAndMap} from '../utils'
import Controls from "./Controls";

const ITEMS_PER_PAGE = 5


class AddOperation extends React.Component {

    state = {
        category: "",
        date: "",
        description: "",
        income: true,
        value: "",
        name: "",
        transactions: [],
        categoriesExp: [],
        categoriesInc: [],
        open: false,
        dialog: {
            open: false,
            category: '',
            description: ''
        },
        currentPage: 0


    }

    componentDidMount() {
        this.loadTransaction()
        this.loadCategoriesExp()
        this.loadCategoriesInc()

    }



    loadTransaction = () => {
        fetch('https://fatcash-app.firebaseio.com/transactions/.json')
            .then(r => r.json())
            .then((data) => {
                const transactionInArray = mapObjectToArray(data)

                this.setState({
                    transactions: transactionInArray.reverse(),
                    category: "",
                    date: "",
                    description: "",
                    income: this.state.income,
                    value: ""
                })
            })

    }

    loadCategoriesExp = () => {
        fetch('https://fatcash-app.firebaseio.com/categories/exp/.json')
            .then(r => r.json())
            .then((data) => {
                const categoriesExpInArray = mapObjectToArray(data)

                this.setState({
                    categoriesExp: categoriesExpInArray,
                    name: ""
                })
            })

    }

    loadCategoriesInc = () => {
        fetch('https://fatcash-app.firebaseio.com/categories/income/.json')
            .then(r => r.json())
            .then((data) => {
                const categoriesIncInArray = mapObjectToArray(data)

                this.setState({
                    categoriesInc: categoriesIncInArray,
                    name: ""
                })
            })

    }

    handleOpen = (el) => {

        this.setState({
            dialog: {
                open: true,
                category: el.category,
                description: el.description
            }
        });
    };

    handleClose = () => {
        this.setState({
            dialog: {
                open: false,
            }
        });
    };

    newCategoryHandler = (el, key, val) => {
        this.setState({category: val})

    }
    newDateHandler = (el, val) => {
        this.setState({date: val})

    }
    newDescriptionHandler = (el, val) => {
        this.setState({description: val})

    }
    newIncomeHandler = (el, val) => {
        this.setState({income: val})

    }
    newValueHandler = (el, val) => {
        this.setState({value: val})

    }

    saveTaskToDatabase = () => {

        this.state.value.length === 0 || this.state.category.length === 0 ? alert("You must add value and choose category !!") :

            fetch('https://fatcash-app.firebaseio.com/transactions/.json',
                {
                    method: 'POST',
                    body: JSON.stringify
                    (
                        {
                            category: this.state.category,
                            date: Date.now(),
                            description: this.state.description,
                            income: this.state.income,
                            value: this.state.value,
                        }
                    )
                }
            ).then(this.loadTransaction)
        alert('Operation sucesfully added')
    }


    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,

            ,];

        return (
            <div style={{margin: "20px"}}>


                <Controls
                    newIncomeHandler = {this.newIncomeHandler}
                    newCategoryHandler= {this.newCategoryHandler}
                    newDescriptionHandler={this.newDescriptionHandler}
                    newValueHandler={this.newValueHandler}
                    saveTaskToDatabase={this.saveTaskToDatabase}
                    income={this.state.income}
                    categoriesInc={this.state.categoriesInc}
                    category={this.state.category}
                    categoriesExp={this.state.categoriesExp}
                    description={this.state.description}
                    value={this.state.value}

                />




                {
                    this.state.transactions.filter((el, i) => (
                        i >= this.state.currentPage * ITEMS_PER_PAGE
                        &&
                        i < (this.state.currentPage + 1) * ITEMS_PER_PAGE
                    )).map((el) => (
                            <MenuItem
                                secondaryText={`${el.category} || ${el.income === true ? "Income" : "Expence"} || ${moment(el.date).format('MMMM Do YYYY, h:mm:ss a')}`}
                            > Value: {el.value}
                                &ensp;
                                <RaisedButton style={{margin: '10px'}} label="Clik here to read description"
                                              onClick={() => {
                                                  this.handleOpen(el);
                                              }}/>
                            </MenuItem>
                        )
                    )

                }
                <Pagination
                    total={Math.ceil(this.state.transactions.length / ITEMS_PER_PAGE)}
                    current={this.state.currentPage + 1}
                    display={10}
                    onChange={newPage => this.setState({currentPage: newPage - 1})}
                />

                <Dialog
                    title={this.state.dialog.category}
                    actions={actions}
                    modal={false}
                    open={this.state.dialog.open}
                    onRequestClose={this.handleClose}
                >

                    {this.state.dialog.description}

                </Dialog>

            </div>
        )
    }
}


export default AddOperation