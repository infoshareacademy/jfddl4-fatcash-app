import React, {Component} from 'react'
import {PieChart, Pie, Tooltip, BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell, LineChart, Line, Legend} from 'recharts'
import {Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux'

const styles={
    row:{
        width:'100%'
    }
}


class Dashboard extends React.Component{

    render()
    {
        return (
            <div>
                <h1>Dashboard</h1>
                <Paper zDepth={3} rounded={true}>

                    <Row style={styles.row}>
                        <Col xs={12} sm={12} md={6}>

                    <BarChart width={730} height={250} data={this.props.logins}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="key" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" />
                        {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                    </BarChart>

                        </Col>
                    </Row>

                </Paper>
            </div>
        )
    }
    ;

}
const mapStateToProps=(state)=>({

    logins:state.numberOfLogins.logins,
    transact:state.transactions.transactions

})

const mapDispatchToProps=(dispatch)=>({



})


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)






































