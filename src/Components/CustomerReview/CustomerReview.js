import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomerReview = (props) => {
    const navigate = useNavigate();
    // console.log(props);
    return (
        <div>
            <h1 className='text-2xl'>Customer Name</h1>
            <button onClick={() => navigate("/reviews")}>See All Reviews</button>
        </div>
    );
};

export default CustomerReview;