import React from 'react'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import 'react-input-range/lib/css/index.css'
import Pagination from 'material-ui-pagination';
import {mapObjectToArray} from '../../utils'
import ListItemForOperationList from '../AddOperation/ListItemForOperationList'

import ItemFromList from './ItemFromList'
import Search from './Search'

import {connect} from 'react-redux'

const ITEMS_PER_PAGE = 5

class OperationList extends React.Component {
    state = {
        valueRange: {min: 0, max: 5000},
        valueDrop: this.props.match.params.categoryId || "",
        transactions: [],

        categoriesExp: [],
        categoriesInc: [],

        currentPage: 0
    }

    componentDidMount() {
        // this.loadTransaction()
        this.loadCategoriesExp()
        this.loadCategoriesInc()
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

        const filteredTransaction = this.props.transactions && this.props.transactions.filter(task => (
            (this.state.valueDrop ? task.category === this.state.valueDrop : true)
            &&
            task.value >= this.state.valueRange.min
            &&
            task.value <= this.state.valueRange.max
            &&
            task.description.toLowerCase().indexOf(task.description.toLowerCase()) !== -1
        ))

        const filteredTransactionLength = filteredTransaction && filteredTransaction.length

        return (
            !filteredTransaction ?
                'Loading...'
                :
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
                            )).map((transaction) => {
                                const categories = this.state.categoriesInc.concat(this.state.categoriesExp)
                                const categoryOfTransaction = categories.find(category => category.key === transaction.category)


                                return <ListItemForOperationList
                                    k={transaction.key}
                                    category={categoryOfTransaction ? categoryOfTransaction.name : ''}
                                    cash={transaction.value}
                                    date={transaction.date}
                                >
                                </ListItemForOperationList>

                            }
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




                </div>
        )
    }
}

const mapStateToProps = state => ({
    transactions: state.transactions.transactions
})

export default connect(
    mapStateToProps
)(OperationList)