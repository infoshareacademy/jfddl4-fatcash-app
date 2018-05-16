import React from 'react'
import InputRange from 'react-input-range'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import 'react-input-range/lib/css/index.css'
import Pagination from 'material-ui-pagination';

import ItemFromList from './ItemFromList'

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

    mapObjectToArray = (obj) => (
        Object.entries(obj || {})
            .map(([key, value]) => (
                typeof value === 'object' ?
                    {...value, key}
                    :
                    {key, value}
            ))
    )

    loadTransaction = () => {
        fetch('https://fatcash-app.firebaseio.com/transactions/.json')
            .then(r => r.json())
            .then((data) => {
                const transactionInArray = this.mapObjectToArray(data)

                this.setState({
                    transactions: transactionInArray.reverse(),
                    category: "",
                    date: "",
                    description: "",
                    income: "",
                    value: ""
                })
            })

    }

    loadCategoriesExp = () => {
        fetch('https://fatcash-app.firebaseio.com/categories/exp/.json')
            .then(r => r.json())
            .then((data) => {
                const categoriesExpInArray = this.mapObjectToArray(data)

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
                const categoriesIncInArray = this.mapObjectToArray(data)

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

                <div style={{border: '30px solid #f3f3f5'}}>
                    <div style={{margin: '10px 25px 10px 25px'}}>
                        <TextField
                            hintText="Search..."
                            fullWidth={true}
                            onChange={(e, value) => {
                                this.setState({
                                    description: value
                                })
                            }}
                        />
                    </div>
                    <div style={{margin: '30px 25px 10px 25px'}}>
                        <InputRange
                            maxValue={5000}
                            minValue={0}
                            value={this.state.valueRange}
                            onChange={valueRange => this.setState({valueRange})}
                        />
                    </div>

                    <div style={{margin: '10px 25px 10px 25px'}}>
                        Incomes:
                        <DropDownMenu
                            value={this.state.valueDrop}
                            onChange={this.handleChange}
                        >

                            {this.state.categoriesInc.map((el) => (
                                    <MenuItem value={el.name} primaryText={el.name} label={el.name}/>
                                )
                            )}
                        </DropDownMenu>
                        Expences:
                        <DropDownMenu
                            value={this.state.valueDrop}

                            onChange={this.handleChange}
                        >
                            {this.state.categoriesExp.map((el) => (
                                    <MenuItem
                                        value={el.name}
                                        primaryText={el.name}
                                        label={el.name}
                                    />
                                )
                            )}
                        </DropDownMenu>
                    </div>
                </div>
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