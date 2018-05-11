// Jak zrobić filtry!!!! Wpisując do searcha aktualizujemy state. filtry to oddzielne funkcje, które aktualizują transaction w state


import React from 'react'
import InputRange from 'react-input-range'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

import 'react-input-range/lib/css/index.css'

class OperationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            valueRange: {min: 0, max: 5000},
            valueDrop: 1,
            transactions: "",
            category: "",
            date: "",
            description: "",
            income: "",
            value: "",
            categories: []
        };
    }

    componentDidMount() {
        this.loadTransaction()

    }

    // assignCategoryFromProps() {
    //     if (this.props.match.params.param_name) {
    //         this.setState({
    //             category: this.props.match.params.param_name
    //
    //             //Paweł przekazuje mi parametr i trzeba go wsadzić w category w state
    //         })
    //     }
    // }

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
                    income: "",
                    value: ""
                })
            })

    }

    // loadCategories = () => {
    //
    // }


    handleChange = (event, index, valueDrop) => this.setState({valueDrop});

    render() {
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
                <DropDownMenu value={this.state.valueDrop}
                              onChange={this.handleChange}>
                    <MenuItem value={1}
                              primaryText="Never"/>
                    <MenuItem value={2}
                              primaryText="Every Night"/>
                    <MenuItem value={3}
                              primaryText="Weeknights"/>
                    <MenuItem value={4}
                              primaryText="Weekends"/>
                    <MenuItem value={5}
                              primaryText="Weekly"/>
                </DropDownMenu>

            </div>
        )
    }
}


export default OperationList