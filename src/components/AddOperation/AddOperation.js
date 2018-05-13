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

        this.state.value.length===0 || this.state.category.length===0 ? alert("You must add value and choose category !!") :

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
                        label="expense"

                    />
                </RadioButtonGroup>

                {this.state.income === true ?
                    <SelectField  value={this.state.category} floatingLabelText="Choose category of your income" fullWidth={true} onChange={this.newCategoryHandler}>
                        {
                            this.state.categoriesInc.map((el) => (

                                    <MenuItem value={el.name} primaryText={el.name}/>

                                )
                            )}

                    </SelectField>
                    :
                    <SelectField value={this.state.category} floatingLabelText="Choose category of your expence" fullWidth={true} onChange={this.newCategoryHandler}>
                        {this.state.categoriesExp.map((el) => (

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
                    hintText={"Write description..."}
                    fullWidth={true}
                    onChange={this.newDescriptionHandler}
                />
                <Divider/>

                <TextField
                    value={this.state.value}
                    hintText={'Write value of your income or expence...'}
                    fullWidth={true}
                    type={'number'}
                    onChange={this.newValueHandler}
                />
                <Divider/>
                <RaisedButton
                    onClick={this.saveTaskToDatabase}
                    fullWidth={true}
                    primary={true}
                    label={"SAVE IT!"}
                    disabled={this.state.value && this.state.category ? false : true}
                />


                {
                    this.state.transactions.map((el) => (
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