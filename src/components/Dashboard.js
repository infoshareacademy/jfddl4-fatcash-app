import React from 'react'
import {PieChart, Pie, Tooltip, BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell} from 'recharts'
import {Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux'


const styles = {
    pie: {
        margin: '0 auto',
    },

};

const data = [
    {
        value: 70,
        name: 'Papierosy',
        color: 'red'
    },
    {
        value: 10,
        name: 'Słodycze',
        color: '#FFBB28'
    },

    {
        value: 20,
        name: 'Alkohol',
        color: '#FF804'
    }

];

const data1 = [
    {
        value: 70,
        name: 'Papierosy',
        color: 'pink'
    },
    {
        value: 10,
        name: 'Słodycze',
        color: 'blue'
    },

    {
        value: 20,
        name: 'Alkohol',
        color: 'yellow'
    }

];



const Dashboard = (props) => {

   const loginLogs = props.logins.map((el) => ({value:el.timestamp}))
    console.log(loginLogs)
    return (
        <div>
            <h1>Dashboard</h1>
            <Paper zDepth={3} rounded={true}>
                <Row>
                    <Col xs={12} sm={6}>
                        <PieChart style={styles.pie} width={320} height={320}>
                            <Pie
                                data={props.logins}
                                dataKey="value"
                                nameKey="name"

                            >
                                {
                                    data1.map((value, index) => (
                                        <Cell key={`cell-${index}`} fill={'red'}/>
                                    ))
                                }
                            </Pie>
                            <Tooltip/>
                        </PieChart>
                    </Col>
                    <Col xs={12} sm={6}>

                        <BarChart width={320} height={320} data={props.logins}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name"/>
                            <YAxis/>

                            <Bar label={true} dataKey="value" fill="#8884d8">
                                {

                                    data.map((value, index) => (
                                        <Cell key={`cell-${index}`} fill={value.color}/>
                                    ))
                                }
                            </Bar>
                        </BarChart>

                    </Col>
                </Row>
            </Paper>
        </div>
    )
};


const mapStateToProps=(state)=>({

    logins:state.numberOfLogins.logins,
    transact:state.transactions.transactions

})

const mapDispatchToProps=(dispatch)=>({


})


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)






































