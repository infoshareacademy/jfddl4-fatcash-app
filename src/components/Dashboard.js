import React from 'react'
import {PieChart, Pie, Tooltip, BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell} from 'recharts'
import {Row, Col} from 'react-flexbox-grid'
import Paper from 'material-ui/Paper';

const styles = {
    pie: {
        margin: '0 auto',

    },
    paper: {
        marginTop: '8vh',
        padding: '5vh'
    },
    row: {
        backgroundColor: '#b2e3f4',
        padding: '2vh',
        borderRadius: '30px'

    },
    h: {
        letterSpacing: '5px'

    }
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
    },
];
const data1 = [
    {
        value: 70,
        name: 'Papierosy',
        color: 'green'
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
const Dashboard = () => {
    return (

        <Paper style={styles.paper}>
            <Row style={styles.row}>
                <Col xs={12} sm={12} md={6}>
                    <h2 style={styles.h}>Transactions</h2>
                    <PieChart style={styles.pie} width={300} height={300}>
                        <Pie
                            data={data1}
                            dataKey="value"
                            nameKey="name"

                        >
                            {
                                data1.map((value, index) => (
                                    <Cell key={`cell-${index}`} fill={value.color}/>
                                ))
                            }
                        </Pie>
                        <Tooltip/>
                    </PieChart>
                </Col>

                <Col xs={12} sm={12} md={6}>

                    <h2 style={styles.h}>Number of logins</h2>
                    <BarChart width={300} height={300} data={data}>
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
    )
};
export default Dashboard