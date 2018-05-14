import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'
import {Link} from 'react-router-dom'

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
        k: this.props
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
                    {
                        this.state.inc.map((value, index) => {
                                return (
                                    <Link to={`/filtered-category-list/${value.name}`}>
                                        <MenuItem
                                            rightIcon={<RemoveRedEye/>}
                                        >
                                            {value.name}
                                        </MenuItem>
                                    </Link>
                                )
                            }
                        )
                    }
                </div>

                <div>
                    <h2 style={style.h2}>Expenses</h2>
                    {
                        this.state.exp.map((value, index) => {
                                return (
                                    <MenuItem
                                        rightIcon={<RemoveRedEye onClick={() => (value.name)}/>}
                                    >{value.name} </MenuItem>
                                )
                            }
                        )
                    }
                </div>
            </div>
        )
    }
}

export default CategoryList