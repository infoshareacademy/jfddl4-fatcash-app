import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import 'react-input-range/lib/css/index.css'
import Pagination from 'material-ui-pagination';
import {mapObjectToArray} from '../utils'

import ItemFromList from './ItemFromList'
import Search from './Search'

const ITEMS_PER_PAGE = 5

class OperationList extends React.Component {
    state = {
        valueRange: {min: 0, max: 5000},
        valueDrop: "",
        transactions: [],
        category: "",
        date: "",
        description: "",
        income: "",
        value: "",
        categories: [],
        categoriesExp: [],
        categoriesInc: [],
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

    // mapObjectToArray = (obj) => (
    //     Object.entries(obj || {})
    //         .map(([key, value]) => (
    //             typeof value === 'object' ?
    //                 {...value, key}
    //                 :
    //                 {key, value}
    //         ))
    // )

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
                    income: "",
                    value: "",
                    image: ""
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
        })
    }

    handleClose = () => {
        this.setState({
            dialog: {
                open: false,

            }
        })
    }

    handleText = (e, value) => {
        this.setState({
            description: value
        })
    }

    handleRange = valueRange => this.setState({valueRange})

    handleChange = (event, index, valueDrop) => (this.setState({valueDrop}));

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />
        ]

        const filteredTransaction = this.state.transactions.filter(task => (
            (this.state.valueDrop ? task.category === this.state.valueDrop : true)
            &&
            task.value >= this.state.valueRange.min
            &&
            task.value <= this.state.valueRange.max
            &&
            task.description.toLowerCase().indexOf(this.state.description.toLowerCase()) !== -1
        ))

        const filteredTransactionLength = filteredTransaction.length

        return (
            <div>
                <Search
                    handleChange={this.handleChange}
                    handleText={this.handleText}
                    handleRange={this.handleRange}
                    valueRange={this.state.valueRange}
                    valueDrop={this.state.valueDrop}
                    categoriesInc={this.state.categoriesInc}
                    categoriesExp={this.state.categoriesExp}
                />

                <br/>

                <Divider/>

                {
                    filteredTransaction
                        .filter((el, i) => (
                            i >= this.state.currentPage * ITEMS_PER_PAGE
                            &&
                            i < (this.state.currentPage + 1) * ITEMS_PER_PAGE
                        ))
                        .map((el) => (
                                <ItemFromList
                                    el={el}
                                    handleOpen={this.handleOpen}
                                />
                            )
                        )
                }

                <Divider/>

                <Pagination
                    total={Math.ceil(filteredTransactionLength / ITEMS_PER_PAGE)}
                    current={this.state.currentPage + 1}
                    display={10}
                    onChange={newPage => this.setState({currentPage: newPage - 1})}
                />

                <Divider/>

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


export default OperationList