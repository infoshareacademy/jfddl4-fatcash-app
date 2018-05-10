import React from 'react'
import InputRange from 'react-input-range'
import TextField from 'material-ui/TextField'
import 'react-input-range/lib/css/index.css'

class OperationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: {min: 2, max: 10},
        };
    }
    render(){
            return (
                <div>
                    List of Operations
                    <div>
                        <TextField
                            hintText="Hint Text"
                        />
                    </div>

                    <InputRange
                        maxValue={20}
                        minValue={0}
                        value={this.state.value}
                        onChange={value => this.setState({ value })} />

                </div>
            )
    }
}


export default OperationList