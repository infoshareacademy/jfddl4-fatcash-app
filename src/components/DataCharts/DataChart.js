import React from 'react'
import {connect} from 'react-redux'
import {PieChart, Pie, Tooltip, BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell} from 'recharts'






const DataChart = (props) => {

    const incomes = props.transactions.filter((el, i, arr) => el.income === true)
    const expences = props.transactions.filter((el, i, arr) => el.income === false)


    const expencesValues = expences.filter((el, i, arr) => el.date>Date.now()-86400000).map((el, i, arr) => el.value) // filter by 24h
    const incomesValues = incomes.map((el, i, arr) => el.value)

    const incomesSum = incomesValues.reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;


    }, 0);

    const expencesSum = expencesValues.reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;


    }, 0);

    const expencesAndIncomes = [{value: incomesSum, color:'green', name:'Incomes'}, {value: expencesSum, color:'red', name:'Expences'}]


console.log(expencesAndIncomes)

    return (
        <div>

            {incomes.length>0 ?
                <PieChart  width={320} height={320}>
                    <Pie
                        data={expencesAndIncomes}
                        dataKey="value"
                        nameKey="name"

                    >
                        {
                            expencesAndIncomes.map((value, index) => (
                                <Cell key={`cell-${value.value}`} fill={value.color}/>
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