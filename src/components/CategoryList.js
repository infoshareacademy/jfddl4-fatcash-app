import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'

class CategoryList extends React.Component {

    style = {

        h2: {
            textAlign: 'center',

        }
    }
    state = {

        inc: [],
        exp: [],
        k:this.props
    }
    mapObjectToArray = (obj) => (
        Object.entries(obj || {})
            .map(([key, value]) => (
                typeof value === 'object' ?
                    {...value, key}
                    :
                    {key, value}
            ))
    );
    componentDidMount() {

        fetch('https://fatcash-app.firebaseio.com/categories/exp/.json')
            .then(response => response.json())
            .then(data => this.setState({
                exp: this.mapObjectToArray(data)
            }));

        fetch('https://fatcash-app.firebaseio.com/categories/income/.json')
            .then(response => response.json())
            .then(data => this.setState({
                inc: this.mapObjectToArray(data)
            }))
    }
    render() {

        return (
            <div>
                <div>
                    <h2 style={this.style.h2}>Incomes</h2>
                    {
                        this.state.inc.map((value, index) => {
                                return (
                                    <MenuItem

                                        rightIcon={<RemoveRedEye onClick={()=>alert(value.name)} />}

                                    >{value.name} </MenuItem>
                                )
                            }
                        )
                    }
                </div>

                <div>
                    <h2 style={this.style.h2}>Expenses</h2>
                    {
                        this.state.exp.map((value, index) => {
                                return (
                                    <MenuItem

                                        rightIcon={<RemoveRedEye onClick={()=>(value.name)}/>}


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