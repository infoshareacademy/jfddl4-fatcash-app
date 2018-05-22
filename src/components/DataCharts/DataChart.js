import React from 'react'
import {connect} from 'react-redux'
import {PieChart, Pie, Tooltip, BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell} from 'recharts'






const DataChart = (props) => {

    const incomes = props.transactions.filter((el, i, arr) => el.income === true)
    const expences = props.transactions.filter((el, i, arr) => el.income === false)


    const expencesValues = expences.map((el, i, arr) => el.value)
    const incomesValues = incomes.map((el, i, arr) => el.value)

    props.transactions.reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;


    }, 0);

    return (
        <div>

            {incomes.length>0 ?
                <PieChart  width={320} height={320}>
                    <Pie
                        data={incomes}
                        dataKey="value"

                    >
                        {
                            incomes.map((value, index) => (
                                <Cell key={`cell-${index}`} fill={'red'}/>
                            ))
                        }
                    </Pie>
                    <Tooltip/>
                </PieChart>
             : 'ładowanie!'}


        </div>
    )
};
const mapStateToProps = state => ({
    categoriesInc: state.categoriesIncome.categories,
    categoriesExp: state.categoriesExp.categories,
    userUid: state.auth.user.uid,
    transactions: state.transactions.transactions
})

export default connect(
    mapStateToProps
)(DataChart)