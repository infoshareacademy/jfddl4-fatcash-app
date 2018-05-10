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
                    transactions: transactionInArray,
                    category: "",
                    date: "",
                    description: "",
                    income: true,
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

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
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
        console.log(this.state.income)
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
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,

            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,];

        return (
            <div>


                <RadioButtonGroup
                    name="shipSpeed"
                    defaultSelected={true}
                    onChange={this.newIncomeHandler}
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

                {this.state.income === true ?
                    <SelectField floatingLabelText="Category" fullWidth={true} onChange={this.newCategoryHandler}>
                        {
                            this.state.categoriesExp.map((el) => (

                                    <MenuItem value={el.name} primaryText={el.name}/>

                                )
                            )}

                    </SelectField>
                    :
                    <SelectField fullWidth={true} onChange={this.newCategoryHandler}>
                        {this.state.categoriesInc.map((el) => (

                                <MenuItem value={el.name} primaryText={el.name}/>

                            )
                        )}
                    </SelectField>

                }


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
                            <MenuItem
                                secondaryText={`${el.category} || ${el.income === true ? "Income" : "Expence"} || ${moment(el.date).format('MMMM Do YYYY, h:mm:ss a')}`}
                                > Value: {el.value}
                                &ensp;
                                <RaisedButton style={{margin: '10px'}} label="Clik here to read description" onClick={this.handleOpen}/>
                                <Dialog
                                    title="Description of your income/expence"
                                    modal={false}
                                    open={this.state.open}
                                    onRequestClose={this.handleClose}
                                >
                                    {el.description}
                                </Dialog>


                            </MenuItem>


                        )
                    )

                }


            </div>

        )
    }
}


export default AddOperation