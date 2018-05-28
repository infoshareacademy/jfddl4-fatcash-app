import React, {Component} from 'react'
import {
    PieChart,
    Pie,
    Tooltip,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Cell,
    LineChart,
    Line,
    Legend
} from 'recharts'
import {Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux'

const styles = {
    row: {
        width: '100%'
    }
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

for (var i = 0; i < 10; i++) {
    ;
}

class Dashboard extends React.Component {




    render() {

          const categoriesChartData =  getCategoriesChartData(
              this.props.transact,
              this.props.categoriesExp,
              this.props.categoriesInc
          )



        console.log()
        return (
            <div>
                <h1>Dashboard</h1>
                <Paper zDepth={3} rounded={true}>

                    <Row style={styles.row}>
                        <Col xs={12} sm={12} md={6}>

                            <BarChart width={730} height={250} data={this.props.logins}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="key"/>
                                <YAxis/>
                                <Tooltip/>
                                <Legend/>
                                <Bar dataKey="value" fill="#8884d8"/>
                                {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                            </BarChart>

                        </Col>


                        <PieChart style={styles.pie} width={320} height={320}>
                        <Pie
                        data={categoriesChartData}
                        dataKey="value"
                        nameKey="name"
                        >
                        {
                            categoriesChartData.map((value, index) => (
                        <Cell key={`cell-${value.value}`} fill={value.color}/>
                        ))
                        }
                        </Pie>
                        <Tooltip/>


                        </PieChart>

                    </Row>


                </Paper>
            </div>
        )
    }

}

const getCategoriesChartData = (transact, categoriesExp, categoriesInc) => {
    const categoriesAll = categoriesExp.concat(categoriesInc)

    return Object.entries(
        transact.reduce((reduced, transaction) => {
            if (reduced[transaction.category]) {
                reduced[transaction.category] = reduced[transaction.category] + 1
            } else {
                reduced[transaction.category] = 1
            }
            return reduced
        }, {})
    ).map(([keyOfCategory, count]) => (
        {value: count, color:`${getRandomRgb()}`, name: categoriesAll.find(cat => cat.key === keyOfCategory).name}
    ))

}


const mapStateToProps = (state) => ({

    logins: state.numberOfLogins.logins,
    transact: state.transactions.transactions,
    categoriesInc: state.categoriesIncome.categories,
    categoriesExp: state.categoriesExp.categories,

})

const mapDispatchToProps = (dispatch) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)






































