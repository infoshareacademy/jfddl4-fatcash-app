import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import moment from 'moment'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog';
import Pagination from '../../components/Pagination';
import {mapObjectToArray, transactionFilterAndMap} from '../utils'
import Controls from "./Controls";
import ListItemForOperationList from './ListItemForOperationList'

const ITEMS_PER_PAGE = 5

class AddOperation extends React.Component {
    state = {
        category: "",
        date: "",
        description: "",
        income: true,
        value: "",
        image: '',
        name: "",
        transactions: [],
        categoriesExp: [],
        categoriesInc: [],
        open: false,
        dialog: {
            open: false,
            category: '',
            description: '',
            image: ''
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
                    value: "",
                    image: ''

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
                description: el.description,
                image: el.image
            }
        })
    }
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
    newOperationHandler = (stateProperty, value) => this.setState({[stateProperty]: value})

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
                            image: this.state.image
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
            />];

        return (
            <div style={{margin: "20px"}}>


                <Controls
                    newIncomeHandler={(e, val) => this.newOperationHandler('income', val)}
                    newImageHandler={(e, val) => this.newOperationHandler('image', val)}
                    newCategoryHandler={this.newCategoryHandler}
                    newDescriptionHandler={(e, val) => this.newOperationHandler('description', val)}
                    newValueHandler={(e, val) => this.newOperationHandler('value', val)}
                    saveTaskToDatabase={this.saveTaskToDatabase}
                    income={this.state.income}
                    categoriesInc={this.state.categoriesInc}
                    category={this.state.category}
                    categoriesExp={this.state.categoriesExp}
                    description={this.state.description}
                    value={this.state.value}
                    image={this.state.image}
                />

                {
                    this.state.transactions.filter((el, i) => (
                        i >= this.state.currentPage * ITEMS_PER_PAGE
                        &&
                        i < (this.state.currentPage + 1) * ITEMS_PER_PAGE
                    )).map((el) => (
                            <ListItemForOperationList
                                k={el.key}
                                category={el.category}
                                cash={el.value}
                                date={el.date}
                            >
                            </ListItemForOperationList>
                        )
                    )

                }
                <Pagination transactions={this.state.transactions}
                            itemsPerPage={ITEMS_PER_PAGE}
                            currentPage={this.state.currentPage}
                            newPageHandler={newPage => this.setState({currentPage: newPage - 1})}
                />


                <Dialog

                    title={this.state.dialog.category}
                    actions={actions}
                    modal={false}
                    open={this.state.dialog.open}
                    onRequestClose={this.handleClose}
                >
                    <img src={this.state.dialog.image}/>
                    {this.state.dialog.description}

                </Dialog>

            </div>
        )
    }
}

export default AddOperation