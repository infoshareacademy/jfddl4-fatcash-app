import React from 'react'
import Divider from 'material-ui/Divider'
import 'react-input-range/lib/css/index.css'
import Pagination from 'material-ui-pagination';
import ListItemForOperationList from './ListItemForOperationList'
import Search from './Search'
import {connect} from 'react-redux'
import FullOperationView from './FullOperationView'
import LinearProgress from 'material-ui/LinearProgress';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';




const ITEMS_PER_PAGE = 5

class OperationList extends React.Component {
    state = {
        valueRange: {min: 0, max: Math.max.apply(null, this.props.transactions.map((i)=> (i.value)))},
        valueDrop: this.props.match.params.categoryId || "",
        currentPage: 0,
        description: ''
    }

    componentWillReceiveProps(props){
        if (props.transactions){
            this.setState({
                valueRange: {
                    min: 0,
                    max: Math.max.apply(null, props.transactions.map((i)=> (i.value)))
                }
            })
        }
    }

    handleText = (e, value) => {
        this.setState({
            description: value
        })
    }

    handleRange = valueRange => this.setState({valueRange})

    handleChange = (event, index, valueDrop) => (this.setState({valueDrop}));

    render() {

        const filteredTransaction =  this.props.transactions && this.props.transactions.filter(task => (
            (this.state.valueDrop && this.state.valueDrop !== 'all categories' ? task.category === this.state.valueDrop : true)
            &&
            task.value >= this.state.valueRange.min
            &&
            task.value <= this.state.valueRange.max
            &&
            task.description.toLowerCase().indexOf(this.state.description.toLowerCase()) !== -1

        )
    )

        const filteredTransactionLength = filteredTransaction && filteredTransaction.length


        return (
            !filteredTransaction ?
                <LinearProgress mode="indeterminate" />
                :
                <div>
                    {/*<Paper style={{margin: '10px'}}>*/}
                    {this.props.transactions.length>0 ?
                    <Search
                        handleChange={this.handleChange}
                        handleText={this.handleText}
                        handleRange={this.handleRange}
                        valueRange={this.state.valueRange}
                        valueDrop={this.state.valueDrop}
                        categoriesInc={this.props.categoriesInc}
                        categoriesExp={this.props.categoriesExp}
                    />: <h2>You havn`t transactions yet.
                            <Link to={'/add-new-operation'}>
                                <FlatButton label="Add your first transaction" primary={true} /></Link></h2>}
                    {/*</Paper>*/}

                    <br/>
                    <Paper>
                    <Divider/>
                    {
                        filteredTransaction
                            .filter((el, i) => (
                                i >= this.state.currentPage * ITEMS_PER_PAGE
                                &&
                                i < (this.state.currentPage + 1) * ITEMS_PER_PAGE
                            )).map((transaction, i) => {
                                const categories = this.props.categoriesInc.concat(this.props.categoriesExp)
                                const categoryOfTransaction = categories.find(category => category.key === transaction.category)
                                return <ListItemForOperationList
                                    key={i}
                                    k={transaction.key}
                                    category={categoryOfTransaction ? categoryOfTransaction.name : ''}
                                    cash={transaction.value}
                                    date={transaction.date}
                                >
                                </ListItemForOperationList>

                            }
                        )
                    }
                    <Divider/>
                        {this.props.transactions.length>0 ?
                    <Pagination
                        total={Math.ceil(filteredTransactionLength / ITEMS_PER_PAGE)}
                        current={this.state.currentPage + 1}
                        display={10}
                        onChange={newPage => this.setState({currentPage: newPage - 1})}
                    /> : false}

                    <Divider/>
                    </Paper>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    categoriesInc: state.categoriesIncome.categories,
    categoriesExp: state.categoriesExp.categories,
    transactions: state.transactions.transactions
})

export default connect(
    mapStateToProps
)(OperationList)