import React from 'react'


const Search = (handleChange) => (
    <div style={{border: '30px solid #f3f3f5'}}>
        <div style={{margin: '10px 25px 10px 25px'}}>
            <TextField
                hintText="Search..."
                fullWidth={true}
                onChange={(e, value) => {
                    this.setState({
                        description: value
                    })
                }}
            />
        </div>
        <div style={{margin: '30px 25px 10px 25px'}}>
            <InputRange
                maxValue={5000}
                minValue={0}
                value={this.state.valueRange}
                onChange={valueRange => this.setState({valueRange})}
            />
        </div>

        <div style={{margin: '10px 25px 10px 25px'}}>
            Incomes:
            <DropDownMenu
                value={this.state.valueDrop}
                onChange={handleChange}
            >

                {this.state.categoriesInc.map((el) => (
                        <MenuItem value={el.name} primaryText={el.name} label={el.name}/>
                    )
                )}
            </DropDownMenu>
            Expences:
            <DropDownMenu
                value={this.state.valueDrop}

                onChange={handleChange}
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
        </div>
    </div>

)


export default Search