import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'


class AddOperation extends React.Component {

    state = {
        category: "Your category",
        date: "Date",
        description: "Description",
        income: "True or false",
        value: "Value",
        transactions: null


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

        this.setState({transactions: transactionInArray})
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

    saveTaskToDatabase = () => {
        fetch('https://fatcash-app.firebaseio.com/transactions/.json',
            {
                method: 'POST',
                body: JSON.stringify
                (
                    {
                        category: this.state.category,
                        date: this.state.date,
                        description: this.state.description,
                        income: this.state.income,
                        value: this.state.value,
                    }
                )
            }
        )
    }


    render() {
        return (
            <div>
                <TextField
                    value={this.state.category}
                    onChange={this.newCategoryHandler}
                />
                <TextField
                    value={this.state.date}
                    onChange={this.newDateHandler}
                />
                <TextField
                    value={this.state.description}
                    onChange={this.newDescriptionHandler}
                />
                <TextField
                    value={this.state.income}
                    onChange={this.newIncomeHandler}
                />
                <TextField
                    value={this.state.value}
                    onChange={this.newValueHandler}
                />
                <RaisedButton
                    onClick={this.saveTaskToDatabase}
                    label={"SAVE IT!"}
                />



            </div>

        )
    }
}


export default AddOperation