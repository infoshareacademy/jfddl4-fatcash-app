import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import moment from 'moment'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider'



const styles={

    p:{

        margin:'10px',
        padding:'20px',

    }



}









const mapObjectToArray = (obj) => (
    Object.entries(obj || {})
        .map(([key, value]) => (
            typeof value === 'object' ?
                {...value, key}
                :
                {key, value}
        ))
)

class FilteredCategoryList extends React.Component {
    state = {
        transactions: [],
        category: null

    }

    componentDidMount() {
        fetch('https://fatcash-app.firebaseio.com/transactions/.json')
            .then(response => response.json())
            .then(data => this.setState({
                category: this.props.match.params.category || null,
                transactions: mapObjectToArray(data)
            }))
    }

    render() {
        return (
            <div>
                {
                    this.state.transactions.map((value, index) => {
                            if (
                                this.state.category === null
                                ||
                                value.category === this.state.category
                            ) {
                                return (
                                    <Paper zDepth={3} style={styles.p}><MenuItem>{"Category: "+value.category + " | "+"Value: "+value.value+"  |  "+"Description: "+ value.description + " |         " + moment(value.date).format('MMMM Do YYYY, h:mm:ss a')} </MenuItem></Paper>
                                )
                            }
                        }
                    )
                }

            </div>
        )
    }
}

export default FilteredCategoryList