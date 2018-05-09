import React from 'react'
import {PieChart, Pie, Tooltip, BarChart, Bar, CartesianGrid, XAxis, YAxis, Cell} from 'recharts'
import {Row, Col} from 'react-flexbox-grid'

const styles = {
    pie: {
        margin: '0 auto',

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
    }

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
        <Row>
            <Col xs={12} sm={6}>
                <PieChart style={styles.pie} width={320} height={320}>
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

            <Col xs={12} sm={6}>


                <BarChart width={320} height={320} data={data}>
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
    )
};
export default Dashboard







































