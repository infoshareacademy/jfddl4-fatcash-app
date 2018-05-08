import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
        width: 200,
    },
};


class DropDownMenuItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <DropDownMenu value={this.state.value} onChange={this.handleChange} autoWidth={true}>
                    <MenuItem value={1} primaryText="Food"/>
                    <MenuItem value={2} primaryText="Car"/>
                    <MenuItem value={3} primaryText="Other"/>
                </DropDownMenu>

            </div>
        );
    }
}

export default DropDownMenuItem