import React from 'react'

import InputRange from 'react-input-range'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from "react-redux";

const Search = (props) => (
    <div style={{border: '30px solid #f3f3f5'}}>
        <div style={{margin: '10px 25px 10px 25px'}}>
            <TextField
                hintText="Search..."
                fullWidth={true}
                onChange={props.handleText}
            />
        </div>
        <div style={{margin: '30px 25px 10px 25px'}}>
            <InputRange
                maxValue={Math.max.apply(null, props.transactions.map((i) => (i.value)))}
                minValue={0}
                value={props.valueRange}
                onChange={props.handleRange}
            />
        </div>

        <div style={{
            margin: '35px 25px 10px 25px',
            display: 'flex',
            alignItems: 'center',

        }}>
            Income:
            <DropDownMenu
                value={props.valueDrop}
                onChange={props.handleChange}
                listStyle={{
                    padding: '1px 1px 35px 1px',
                    height: '20px',
                    width: '150px',
                    backgroundColor: '#f3f3f5',
                }}
                labelStyle={{
                    backgroundColor: '#f3f3f5',
                    margin: '10px',
                }}
            >
                <MenuItem
                    value={1}
                    primaryText={'Income'}
                    label={'Income'}
                    disabled={true}
                />

                {props.categoriesInc.map((el) => (
                        <MenuItem
                            value={el.key}
                            primaryText={el.name}
                            label={el.name}
                        />
                    )
                )}
            </DropDownMenu>

            Expenses:
            <DropDownMenu
                value={props.valueDrop}
                onChange={props.handleChange}
                listStyle={{
                    padding: '1px 1px 35px 1px',
                    height: '20px',
                    width: '150px',
                    backgroundColor: '#f3f3f5',
                }}
                labelStyle={{
                    backgroundColor: '#f3f3f5',
                    margin: '10px',
                }}
            >
                <MenuItem
                    value={1}
                    primaryText={'Expenses'}
                    label={'Expenses'}
                    disabled={true}
                />

                {props.categoriesExp.map((el) => (
                        <MenuItem
                            value={el.key}
                            primaryText={el.name}
                            label={el.name}
                        />
                    )
                )}
            </DropDownMenu>

        </div>
    </div>

)


const mapStateToProps = state => ({
    categoriesInc: state.categoriesIncome.categories,
    categoriesExp: state.categoriesExp.categories,
    transactions: state.transactions.transactions
})

export default connect(
    mapStateToProps
)(Search)