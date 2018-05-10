import React from 'react'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
    display: 'inline-block',
    margin: '16px 32px 16px 0',
};



class SearchScoreList extends React.Component {

    render(){

        return(

            <div>
                <Paper style={style}>
                    <Menu>
                        <MenuItem primaryText="Maps" />
                        <MenuItem primaryText="Books" />
                    </Menu>
                </Paper>
                <Paper style={style}>
                    <Menu>
                        <MenuItem primaryText="Refresh" />
                        <MenuItem primaryText="Help &amp; feedback" />
                    </Menu>
                </Paper>


            </div>
        )
    }

}


export default SearchScoreList