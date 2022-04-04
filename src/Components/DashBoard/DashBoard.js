import React from 'react';
import MybarChart from '../MyBarChart/MybarChart';
import MyLineChart from '../MyLineChart/MyLineChart';

const DashBoard = () => {
    return (
        <div>
            <h3 className='text-center font-bold text-xl'>Monthwise Sell</h3>
            <MyLineChart></MyLineChart>
            <h3 className='text-center font-bold text-xl pt-4'>Investment Vs Revenue</h3>
            <MybarChart></MybarChart>
        </div>
    );
};

export default DashBoard;