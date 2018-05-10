import React from 'react'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
};


class SearchScoreList extends React.Component {

    componentDidMount() {
        this.readFromDb1()

    }

    readFromDb1 = () => fetch('https://fatcash-app.firebaseio.com/categories/.json')
        .then(response => response.json())
        .then(acctualValFromDb1 => this.setState({
            value: acctualValFromDb1
        }))



    render(){

        return(

            <div>
                <Paper style={style}>
                    <Menu>
                        <MenuItem primaryText={this.acctualValFromDb1} />
                    </Menu>
                </Paper>

            </div>
        )
    }

}


export default SearchScoreList