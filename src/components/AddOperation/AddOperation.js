import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import moment from 'moment'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';




class AddOperation extends React.Component {

    state = {
        category: "",
        date: "",
        description: "",
        income: true,
        value: "",
        transactions: []


    }

    componentDidMount() {
        this.loadTransaction()

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

                this.setState({transactions: transactionInArray,
                    category: "",
                    date: "",
                    description: "",
                    income: true,
                    value: ""
                })
            })

    }

    newCategoryHandler = (el, val) => {
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

    saveTaskToDatabase = () => {console.log(this.state.income)
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
    }


    render() {
        return (
            <div>
                <RadioButtonGroup
                    name="shipSpeed"
                    defaultSelected={true}
                    onChange={(e, val) => this.setState({income: val})}
                >
                    <RadioButton
                        value={true}
                        label="income"

                    />
                    <RadioButton
                        value={false}
                        label="expenses"

                    />
                </RadioButtonGroup>
                <TextField
                    value={this.state.category}
                    hintText={"Your category..."}
                    fullWidth={true}
                    onChange={this.newCategoryHandler}
                />
                <Divider/>
                {/*<TextField*/}
                    {/*value={this.state.date}*/}
                    {/*onChange={this.newDateHandler}*/}
                {/*/>*/}
                <TextField
                    value={this.state.description}
                    hintText={"description..."}
                    fullWidth={true}
                    onChange={this.newDescriptionHandler}
                />
                <Divider/>

                <TextField
                    value={this.state.value}
                    hintText={'value'}
                    fullWidth={true}
                    onChange={this.newValueHandler}
                />
                <Divider/>
                <RaisedButton
                    onClick={this.saveTaskToDatabase}
                    fullWidth={true}
                    primary={true}
                    label={"SAVE IT!"}
                />

                {
                    this.state.transactions.map((el) => (
                            <MenuItem secondaryText={`${el.category} || ${moment(el.date).format('MMMM Do YYYY, h:mm:ss a')}`} primaryText={` Value: ${el.value}`}>Description: {el.description}</MenuItem>


                        )
                    )

                }


            </div>

        )
    }
}


export default AddOperation