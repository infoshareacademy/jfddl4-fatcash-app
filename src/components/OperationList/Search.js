import React from 'react'

import InputRange from 'react-input-range'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import {connect} from "react-redux";
import Paper from 'material-ui/Paper';

const styles = {
    categorybox: {
        margin: 4,
        textAlign: 'center',
        backgroundColor: '#f3f3f5',
        minWidth: 200,
    },
}

const Search = (props) => (
    <div>
        <Paper style={{margin: '10px'}}>
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

            <div
                style={{
                    margin: '35px 25px 10px 25px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                }}
            >
                <div style={styles.categorybox}>
                    <h5 style={{margin: '10px 0px 0px 0px'}}>Income:</h5>
                    <DropDownMenu
                        value={props.valueDrop}
                        onChange={props.handleChange}
                    >
                        <MenuItem
                            value={'all categories'}
                            primaryText={'all categories'}
                            label={'all categories'}
                        />

                        {props.categoriesInc.map((el, i) => (
                                <MenuItem
                                    key={i}
                                    value={el.key}
                                    primaryText={el.name}
                                    label={el.name}
                                />
                            )
                        )}
                    </DropDownMenu>
                </div>
                <div style={styles.categorybox}>
                    <h5 style={{margin: '10px 0px 0px 0px'}}>Expenses:</h5>
                    <DropDownMenu
                        value={props.valueDrop}
                        onChange={props.handleChange}
                    >
                        <MenuItem
                            value={'all categories'}
                            primaryText={'all categories'}
                            label={'all categories'}
                        />

                        {props.categoriesExp.map((el, i) => (
                                <MenuItem
                                    key={i}
                                    value={el.key}
                                    primaryText={el.name}
                                    label={el.name}
                                />
                            )
                        )}
                    </DropDownMenu>
                </div>
            </div>
            <br/>
        </Paper>
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