import React from 'react'
import Pagination from '../../components/Pagination';
import {mapObjectToArray, transactionFilterAndMap} from '../utils'
import Controls from "./Controls";
import ListItemForOperationList from './ListItemForOperationList'
import Snackbar from 'material-ui/Snackbar';

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
            ).then(this.loadTransaction).then(() => {
                this.setState({
                    open: true
                })
            })
    }
    render() {
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
                <Snackbar
                    open={this.state.open}
                    message="  Operation succesfully added to your list"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        )
    }
}

export default AddOperation