import React from 'react'
import {connect} from 'react-redux'
import {PieChart, Pie, Tooltip, Legend, Line, Cell} from 'recharts'
import {RaisedButton} from 'material-ui'


class DataChart extends React.Component{

    state = {
        value: 0
    }
    clickForHour = () => {
        this.setState({
            value: 3600000,
        });
    };
    clickForDay = () => {
        this.setState({
            value: 86400000,
        });
    };
    clickForWeek = () => {
        this.setState({
            value: 86400000 * 7,
        });
    };
    clickForThirtyDays = () => {
        this.setState({
            value: 86400000 * 30,
        });
    };
    render(){

    //
    // clickForDay = () => (value === 86400000)
    // clickForWeek = () => (value === 86400000 * 7)
    // clickForThirtyDays = () => (value === 86400000 * 30)




    const incomes = this.props.transactions.filter((el, i, arr) => el.income === true)
    const expences = this.props.transactions.filter((el, i, arr) => el.income === false)


    const expencesValues = expences.filter((el, i, arr) => el.date > this.state.value===0 ? 0 : Date.now() - this.state.value).map((el, i, arr) => el.value) // filter by 24h
    const incomesValues = incomes.filter((el, i, arr) => el.date > this.state.value===0 ? 0 : Date.now() - this.state.value).map((el, i, arr) => el.value)

    const incomesSum = incomesValues.reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;


    }, 0);

    const expencesSum = expencesValues.reduce(function (previousValue, currentValue, index, array) {
        return previousValue + currentValue;


    }, 0);

    const expencesAndIncomes = [{value: incomesSum, color: 'green', name: 'Incomes'}, {
        value: expencesSum,
        color: 'red',
        name: 'Expences'
    }]


    console.log(expencesAndIncomes)

    return (
        <div>



            {incomes.length > 0 ?
                <PieChart width={320} height={320}>
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
                    <Legend verticalAlign="top" height={36}/>
                    <Line name="Income" type="monotone" dataKey="value" />
                    <Line name="Expences" type="monotone" dataKey="value" />

                </PieChart>
                : 'ładowanie!'}

            <RaisedButton
                onClick={this.clickForHour}
                fullWidth={true}
                primary={true}
                label={"Click for Hour "}
                // disabled={value && category ? false : true}
            />
            <RaisedButton
                onClick={this.clickForDay}
                fullWidth={true}
                primary={true}
                label={"Click for Day "}
                // disabled={value && category ? false : true}
            />
            <RaisedButton
                onClick={this.clickForWeek}
                fullWidth={true}
                primary={true}
                label={"Click for Week "}
                // disabled={value && category ? false : true}
            />
            <RaisedButton
                onClick={this.clickForThirtyDays}
                fullWidth={true}
                primary={true}
                label={"Click for 30 days "}
                // disabled={value && category ? false : true}
            />

        </div>
    )
};}
const mapStateToProps = state => ({
    categoriesInc: state.categoriesIncome.categories,
    categoriesExp: state.categoriesExp.categories,
    userUid: state.auth.user.uid,
    transactions: state.transactions.transactions
})

export default connect(
    mapStateToProps
)(DataChart)