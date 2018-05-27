import React from 'react'

import InputRange from 'react-input-range'
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import {Row, Col} from 'react-flexbox-grid'


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


        <div style={{margin: '30px 25px 10px 25px'}}>
            <Row>
                <Col xs={12} sm={4} md={4} lg={2}>
            Incomes:
            <DropDownMenu
                value={props.valueDrop}
                onChange={props.handleChange}
            >

                {props.categoriesInc.map((el) => (
                        <MenuItem
                            value={el.key}
                            primaryText={el.name}
                            label={el.name}
                        />
                    )
                )}
            </DropDownMenu>
                </Col>
                <Col xs={12} sm={4} md={4} lg={2}>
            Expences:
            <DropDownMenu
                value={props.valueDrop}

                onChange={props.handleChange}
            >
                {props.categoriesExp.map((el) => (
                        <MenuItem
                            value={el.key}
                            primaryText={el.name}
                            label={el.name}
                        />
                    )
                )}
            </DropDownMenu>
                </Col>
            </Row>
        </div>
    </div>


)


export default Search