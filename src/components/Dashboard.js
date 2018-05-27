import React, {Component} from 'react'
import {PieChart, Pie, Tooltip, BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell, LineChart, Line, Legend} from 'recharts'
import {Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux'


const styles = {
    pie: {
        margin: '0 auto',
    },
}

// };
//
// const data = [
//     {
//         value: 70,
//         name: 'Papierosy',
//         color: 'red'
//     },
//     {
//         value: 10,
//         name: 'Słodycze',
//         color: '#FFBB28'
//     },
//
//     {
//         value: 20,
//         name: 'Alkohol',
//         color: '#FF804'
//     }
//
// ];
//
// const data1 = [
//     {
//         value: 70,
//         name: 'Papierosy',
//         color: 'pink'
//     },
//     {
//         value: 10,
//         name: 'Słodycze',
//         color: 'blue'
//     },
//
//     {
//         value: 20,
//         name: 'Alkohol',
//         color: 'yellow'
//     }
//
// ];

class Dashboard extends React.Component{
state = {
    logins: ''
}

    componentWillReceiveProps(props)
    {
        if (props.logins) {
            this.setState({
                logins: props.logins


            })
        }
    }
    render()
    {
        return (
            <div>
                <h1>Dashboard</h1>
                <Paper zDepth={3} rounded={true}>

                    {this.state.logins==true ?
                    <LineChart width={730} height={250} data={this.state.logins}
                               margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                        {console.log(this.state.logins)}

                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="value"/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Line type="monotone" dataKey="value" stroke="#8884d8"/>
                    </LineChart>
                    : false}

                </Paper>
            </div>
        )
    }
    ;

}
const mapStateToProps=(state)=>({

    logins:state.numberOfLogins,
    transact:state.transactions.transactions

})

const mapDispatchToProps=(dispatch)=>({



})


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)






































