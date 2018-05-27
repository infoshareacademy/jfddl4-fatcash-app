import React from 'react'
import {connect} from 'react-redux'
import {PieChart, Pie, Tooltip, Legend, Line, Cell} from 'recharts'
import {RaisedButton, Paper} from 'material-ui'

const styles = {
    pie: {
        marginRight: 'auto',
        marginLeft: 'auto'
    },

};

class DataChart extends React.Component {

    state = {
        timeDifference: 0
    }

    clickForHour = () => {
        this.setState({
            timeDifference: 3600000,
        });
    };
    clickForDay = () => {
        this.setState({
            timeDifference: 86400000,
        });
    };
    clickForWeek = () => {
        this.setState({
            timeDifference: 86400000 * 7,
        });
    };
    clickForThirtyDays = () => {
        this.setState({
            timeDifference: 86400000 * 30,
        });
    };
    clickForAll = () => {
        this.setState({
            timeDifference: 0,
        });
    };
    getElementsWithDateLowerThanCurrentDate = (el, i, arr) => {
        if (this && this.state.timeDifference === 0) {
            return el;
        }
        const currentTimeDifference = Date.now() - this.state.timeDifference;
        return el.date > currentTimeDifference;
    }

    render() {
        const incomes = this.props.transactions.filter((el, i, arr) => el.income === true)
        const expences = this.props.transactions.filter((el, i, arr) => el.income === false)
        const expencesValues = expences.filter(this.getElementsWithDateLowerThanCurrentDate).map((el, i, arr) => el.value) // filter by 24h
        const incomesValues = incomes.filter(this.getElementsWithDateLowerThanCurrentDate).map((el, i, arr) => el.value)
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

        return (
            <Paper style={{margin: "20px", padding: '20px'}}>
                <h2> Bilans chart</h2>
                {
                    expencesAndIncomes[0].value > 0 || expencesAndIncomes[1].value > 0 ?
                    <PieChart style={styles.pie} width={320} height={320}>
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
                            {console.log(expencesAndIncomes)}
                        </Pie>
                        <Tooltip/>
                        <Legend verticalAlign="bottom" height={36}/>
                        <Line name="Income" type="monotone" dataKey="value"/>
                        <Line name="Expences" type="monotone" dataKey="value"/>

                    </PieChart>
                    : <h2 style={{textAlign: 'center', height: '280px', margin: 0, padding: '20px'}}>You don't have transactions in this period</h2>
                }

                <RaisedButton
                    onClick={this.clickForHour}
                    fullWidth={true}
                    primary={true}
                    style={{marginBottom:'10px'}}
                    label={"Click for Hour "}
                    // disabled={value && category ? false : true}
                />
                <RaisedButton
                    onClick={this.clickForDay}
                    fullWidth={true}
                    primary={true}
                    style={{marginBottom:'10px'}}

                    label={"Click for Day "}
                    // disabled={value && category ? false : true}
                />
                <RaisedButton
                    onClick={this.clickForWeek}
                    fullWidth={true}
                    primary={true}
                    style={{marginBottom:'10px'}}

                    label={"Click for Week "}
                    // disabled={value && category ? false : true}
                />
                <RaisedButton
                    onClick={this.clickForThirtyDays}
                    fullWidth={true}
                    primary={true}
                    style={{marginBottom:'10px'}}

                    label={"Click for 30 days "}
                    // disabled={value && category ? false : true}
                />
                <RaisedButton
                    onClick={this.clickForAll}
                    fullWidth={true}
                    primary={true}
                    style={{marginBottom:'10px'}}

                    label={"Click for all days "}
                    // disabled={value && category ? false : true}
                />

            </Paper>
        )
    };
}

const mapStateToProps = state => ({
    categoriesInc: state.categoriesIncome.categories,
    categoriesExp: state.categoriesExp.categories,
    userUid: state.auth.user.uid,
    transactions: state.transactions.transactions
})

export default connect(
    mapStateToProps
)(DataChart)