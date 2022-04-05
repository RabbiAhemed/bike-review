import React from 'react';
import MybarChart from '../MyBarChart/MybarChart';
import MyLineChart from '../MyLineChart/MyLineChart';
import './DashBoard,.css'

const DashBoard = () => {
    return (
        <div className='flex items-center gap-16 chart-container'>
            <div>
                <h3 className='text-center font-bold text-xl'>Monthwise Sell</h3>
                <MyLineChart></MyLineChart>
                <br />
                <h3 className='text-center text-2xl mt- font-bold'>Line Chart</h3>
            </div>
            <div>
                <h3 className='text-center font-bold text-xl pt-4'>Investment Vs Revenue</h3>
                <MybarChart></MybarChart>
                <h3 className='text-center text-2xl mt-8 font-bold'>Bar Chart</h3>
            </div>
        </div>
    );
};

export default DashBoard;