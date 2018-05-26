import React from 'react'

import InputRange from 'react-input-range'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'

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
                maxValue={5000}
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

            <DropDownMenu
                value={props.valueDropInc}
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


            <DropDownMenu
                value={props.valueDropExp}
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

            <RaisedButton
                buttonStyle={{
                    backgroundColor: '#f3f3f5',
                }}

                style={{
                    backgroundColor: '#f3f3f5',
                    margin: '13px 0px 0px 0px'

                }}
                label={'All categories'}
            />
        </div>
    </div>

)


export default Search