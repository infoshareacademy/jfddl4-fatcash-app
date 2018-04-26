import React from 'react'
import {PieChart, Pie, Tooltip} from 'recharts'


const data = [
    {
        value: 70,
        name: 'Papierosy',
        color: 'red'
    },
    {
        value: 10,
        name: 'Słodycze'
    },

    {
        value: 20,
        name: 'Alkohol'
    }

];

const Dashboard = () => {


    return (

        <div>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    fill="#444444"
                />
                <Tooltip/>
            </PieChart>


            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    fill="#773355"
                />
                <Tooltip/>
            </PieChart>
        </div>
    )
};


export default Dashboard







































