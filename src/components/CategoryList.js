import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'
import {Link} from 'react-router-dom'

const style = {
    h2: {
        textAlign: 'center',
    },
    items:{
        textDecoration:'none'
    }

};

const mapObjectToArray = (obj) => (
    Object.entries(obj || {})
        .map(([key, value]) => (
            typeof value === 'object' ?
                {...value, key}
                :
                {key, value}
        ))
);

const ListItem = (props) => (
    <Link style={style.items} to={`/filtered-category-list/${props.value.name}`}>
        <MenuItem
            rightIcon={<RemoveRedEye/>}
        >
            {props.value.name}
        </MenuItem>
    </Link>
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
                    {this.state.inc.map((value) => <ListItem  value={value}/>)}
                </div>

                <div>
                    <h2 style={style.h2}>Expenses</h2>
                    {this.state.exp.map((value) => <ListItem  value={value} style={style.items}/>)}
                </div>
            </div>
        )
    }
}

export default CategoryList