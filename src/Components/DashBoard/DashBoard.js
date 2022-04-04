import React from 'react';
import MybarChart from '../MyBarChart/MybarChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const DashBoard = () => {
    return (
        <div>
            <h3>Monthwise Sell</h3>
            <MyLineChart></MyLineChart>
            <h3>Investment Vs Revenue</h3>
            <MybarChart></MybarChart>
        </div>
    );
};

export default DashBoard;