import React from 'react'
import InputRange from 'react-input-range'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton'
import Divider from 'material-ui/Divider'
import 'react-input-range/lib/css/index.css'
import moment from "moment/moment";

const ITEMS_PER_PAGE = 2

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
        }
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
        console.log(this.state.valueDrop)
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />
        ]

        return (
            <div>
                List of Operations
                <div>
                    <TextField
                        hintText="Wyszukaj..."
                        onChange={(e, value) => {
                            this.setState({
                                description: value
                            })
                        }}
                    />
                </div>
                <div style={{margin: '100px'}}>
                    <InputRange
                        maxValue={5000}
                        minValue={0}
                        value={this.state.valueRange}
                        onChange={valueRange => this.setState({valueRange})}
                    />
                </div>
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
                <br/>
                <Divider/>


                {
                    this.state.transactions.filter(task => (
                        (this.state.valueDrop ? task.category === this.state.valueDrop : true)
                        &&
                        task.value >= this.state.valueRange.min
                        &&
                        task.value <= this.state.valueRange.max
                        &&
                        task.description.toLowerCase().indexOf(this.state.description.toLowerCase()) !== -1
                    ))
                        .map((el) => (
                                <MenuItem
                                    secondaryText={`${el.category} || ${el.income === true ? "Income" : "Expence"} || ${moment(el.date).format('MMMM Do YYYY, h:mm:ss a')}`}
                                >
                                    Value: {el.value}
                                    &ensp;
                                    <RaisedButton
                                        style={{margin: '10px'}}
                                        label="Clik here to read description"
                                        onClick={() => {
                                            this.handleOpen(el);
                                        }}
                                    />
                                </MenuItem>
                            )
                        )
                }


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