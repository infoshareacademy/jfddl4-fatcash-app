import React from 'react'
import ListItemForCategoryList from './ListItemForCategoryList'
import Paper from 'material-ui/Paper';
import {connect} from "react-redux";
import {logOut} from "../../state/auth";

const style = {
    h2: {

        marginTop:25,
        textAlign: 'center',
    },
    Paper: {
        textDecoration:'none',

    }
};
//
// const mapObjectToArray = (obj) => (
//     Object.entries(obj || {})
//         .map(([key, value]) => (
//             typeof value === 'object' ?
//                 {...value, key}
//                 :
//                 {key, value}
//         ))
// );


class CategoryList extends React.Component {
    // state = {
    //     inc: [],
    //     exp: [],
    // }
    //
    // componentDidMount() {
    //     fetch('https://fatcash-app.firebaseio.com/categories/.json')
    //         .then(response => response.json())
    //         .then(data => this.setState({
    //             exp: mapObjectToArray(data.exp),
    //             inc: mapObjectToArray(data.income)
    //         }))
    // }

    render() {
        console.log(this.props)

        return (
            <div>
                <div><Paper style={style.paper} zDepth={3} rounded={true}>
                    <h2 style={style.h2}>Incomes</h2>
                    {this.props.categoriesInc.map((category) => <ListItemForCategoryList item={category}/>)}
                </Paper>
                </div>

                <div>
                    <Paper style={style.paper} zDepth={3} rounded={true}>
                        <h2 style={style.h2}>Expenses</h2>
                        {this.props.categoriesExp.map((category) => <ListItemForCategoryList item={category}/>)}
                    </Paper>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categoriesInc: state.categoriesIncome.categories,
        categoriesExp: state.categoriesExp.categories,
    };
}

function mapDispatchToProps(dispatch) {
    return {

    }

};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryList);