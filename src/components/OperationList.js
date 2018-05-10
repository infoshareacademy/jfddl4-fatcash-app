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

            value: {min: 0, max: 5000},
            valueDrop: 1
        };
    }




    handleChange = (event, index, valueDrop) => this.setState({valueDrop});

    render(){
            return (
                <div>
                    List of Operations
                    <div>
                        <TextField
                            hintText="Wyszukaj..."

                        />
                    </div>

                    <InputRange
                        maxValue={5000}
                        minValue={0}
                        value={this.state.value}
                        onChange={value => this.setState({ value })} />

                    <DropDownMenu value={this.state.valueDrop} onChange={this.handleChange}>
                        <MenuItem value={1} primaryText="Never" />
                        <MenuItem value={2} primaryText="Every Night" />
                        <MenuItem value={3} primaryText="Weeknights" />
                        <MenuItem value={4} primaryText="Weekends" />
                        <MenuItem value={5} primaryText="Weekly" />
                    </DropDownMenu>

                </div>
            )
    }
}


export default OperationList