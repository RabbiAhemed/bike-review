import React, { useEffect, useState } from 'react';
import useReview from '../customHook/useReview';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div className='grid grid-cols-3 gap-4'>

            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;