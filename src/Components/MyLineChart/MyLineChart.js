import React, { useEffect, useState } from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const MyLineChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('chartData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <LineChart width={600} height={300} data={data}>
            <Line dataKey={"sell"} stroke="#833471"></Line>
            <XAxis dataKey={"month"}></XAxis>
            <YAxis></YAxis>
            <Tooltip />
        </LineChart>
    );
};

export default MyLineChart;