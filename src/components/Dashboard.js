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
    pie: {
        margin: '0 auto',

    },
    paper: {
        marginTop: '8vh',
        padding: '5vh'
    },
    row: {
        padding: '2vh',
        borderRadius: '30px'

    },
    h2: {
        textAlign:'center'

    },
    bar:{

        margin: '0 auto'
    },
    colRow:{

        // backgroundColor:'green'
    }
};

function getRandomRgb() {
    const num = Math.round(0xffffff * Math.random());
    const r = num >> 16;
    const g = num >> 8 & 255;
    const b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
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

                <Paper style={{margin: "20px", padding: '20px'}} zDepth={3} rounded={true}>
                    <h1 style={{margin: "20px", padding: '20px'}}>Dashboard</h1>
                    <Row style={styles.row}>
                        <Col xs={12} sm={12} md={6} style={styles.colRow}>

                            <h2 style={styles.h2}>Number of logins per day</h2>

                            <BarChart style={styles.bar} width={window.innerWidth< 700 ? 300 : 600} height={250} data={this.props.logins}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="key"/>
                                <YAxis/>
                                <Tooltip/>
                                <Bar dataKey="value" fill="#8884d8"/>
                                {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                            </BarChart>

                        </Col>

                        <Col xs={12} sm={12} md={6}>



                            <h2 style={styles.h2}>Number of transactions per categories</h2>
                            {this.props.transact.length>0 ?
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
                                :  <h4 style={{textAlign:'center'}}>You don't have any transactions<br/> to display chart</h4> }
                        </Col>

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






































