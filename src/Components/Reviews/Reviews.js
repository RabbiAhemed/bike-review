import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Home from '../Home/Home';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviewData.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <h3>This is Reviews</h3>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
            {
                reviews.slice(0, 3).map(review => <CustomerReview key={review.id} review={review}></CustomerReview>)
            }
        </div>
    );
};

export default Reviews;