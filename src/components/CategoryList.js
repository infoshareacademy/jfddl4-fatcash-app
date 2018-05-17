import React from 'react'
import ListItemForCategoryList from './ListItemForCategoryList'

const style = {
    h2: {
        textAlign: 'center',
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


class CategoryList extends React.Component {
    state = {
        inc: [],
        exp: [],
    }

    componentDidMount() {
        fetch('https://fatcash-app.firebaseio.com/categories/.json')
            .then(response => response.json())
            .then(data => this.setState({
                exp: mapObjectToArray(data.exp),
                inc: mapObjectToArray(data.income)
            }))
    }

    render() {

        return (
            <div>
                <div>
                    <h2 style={style.h2}>Incomes</h2>
                    {this.state.inc.map((value) => <ListItemForCategoryList value={value.name}/>)}
                </div>

                <div>
                    <h2 style={style.h2}>Expenses</h2>
                    {this.state.exp.map((value) => <ListItemForCategoryList value={value.name}/>)}
                </div>
            </div>
        )
    }
}

export default CategoryList