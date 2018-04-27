import React from 'react'
import {PieChart, Pie, Tooltip, Cell} from 'recharts'
import {Row, Col} from 'react-flexbox-grid'

const styles = {
    pie: {
        margin: '0 auto'
    }
}

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

const Dashboard = () => {


    return (

        <Row>
            <Col xs={12} sm={6}>
                <PieChart style={styles.pie} width={320} height={320}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        fill="#444444"

                    />
                    <Tooltip/>
                </PieChart>
            </Col>

            <Col xs={12} sm={6}>
                <PieChart style={styles.pie} width={320} height={320}>
                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                    >
                        {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color}/>
                            ))
                        }
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </Col>
        </Row>
    )
};


export default Dashboard







































