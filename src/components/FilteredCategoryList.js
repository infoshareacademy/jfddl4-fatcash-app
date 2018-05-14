import React from 'react'
import MenuItem from 'material-ui/MenuItem'

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
                                    <MenuItem>{value.category + " : " + value.description + " : " + value.date} </MenuItem>
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