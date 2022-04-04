import React from 'react';

const Review = (props) => {
    const { name, id, rating, image, review } = props.review;
    return (
        <div>
            <h3 className='text-6xl'>name:{name}</h3>
            <img src={image} alt="" />
            <h3>Review:{review}</h3>
            <p>rating:{rating}</p>
        </div>
    );
};

export default Review;