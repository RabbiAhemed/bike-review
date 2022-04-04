import { Tooltip } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from 'recharts';

const MybarChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <BarChart width={500}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
            }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />

            <Legend />
            <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
            <Bar dataKey="investment" stackId="a" fill="#82ca9d" />


        </BarChart>
    );
};

export default MybarChart;