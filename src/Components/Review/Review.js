import React from 'react';
import './Review.css'
const Review = (props) => {
    const { name, id, rating, image, review, profession } = props.review;
    return (
        <div className='review-container'>
            <div className='flex items-center'>
                <img className='w-20' src={image} alt="" />
                <div>
                    <h3 className='font-semibold pl-4'>{name}</h3>
                    <small className='pl-4 italic'>{profession}</small>
                </div>
            </div>
            <br />
            <hr />
            <h3><span className='font-semibold'>Review: </span>{review}</h3>
            <hr />
            <br />
            <hr />
            <p><span className='font-semibold'>Rating: </span>{rating}</p>
            <hr />
        </div>
    );
};

export default Review;