import React from 'react'
import {mapObjectToArray, transactionFilterAndMap} from '../../utils'
import Controls from "../AddOperation/Controls";
import Snackbar from 'material-ui/Snackbar';
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import moment from "moment/moment";
import {connect} from "react-redux";
import categoriesIncome from "../../state/categoriesIncome";


class FullOperationView extends React.Component {
    state = {
        transactionId: this.props.match.params.transactionId || '' // for hyperlinks of operations
    }



    render() {

        return (
            <Paper style={{margin: "10px", padding: '10px'}}>
                {

                    this.state.transactionId.length === 0 ?

                  false
                    :
                    this.props.transactions.filter((el, i, arr) =>
                        (this.state.transactionId === el.key))
                        .map((el, i, arr) => {
                            const categories = this.props.categoriesInc.concat(this.props.categoriesExp)
                            const categoryOfTransaction = categories.find(category => category.key === el.category)
                            return <div>
                                <h2> Your operation </h2>
                                <br/>
                                <div><b>Category:</b>{categoryOfTransaction.name}</div>
                                <br/>
                                <div><b>Your
                                    description:</b>:{el.description === '' ? "You didn't write description" : el.description}
                                </div>
                                <br/>
                                <div><b>Type of operation:</b>{el.income ? 'Income' : 'Expence'}</div>
                                <br/>
                                <div><b>Date of operation:</b>{moment(el.date).format('MMMM Do YYYY, h:mm:ss a')}</div>
                                <br/>

                                <div><img style={{maxWidth: '200px'}} src={el.image}/></div>
                            </div>
                        })
                }
                <Snackbar
                    open={this.state.open}
                    message="  Operation succesfully added to your list"
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </Paper>
        )
    }
}

const mapStateToProps = state => ({
    categoriesInc: state.categoriesIncome.categories,
    categoriesExp: state.categoriesExp.categories,
    userUid: state.auth.user.uid,
    transactions: state.transactions.transactions
})

export default connect(
    mapStateToProps
)(FullOperationView)