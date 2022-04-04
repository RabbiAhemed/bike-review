import React from 'react';
import './CustomerReview.css'
import { useNavigate } from 'react-router-dom';
import useReview from '../customHook/useReview';
import Review from '../Review/Review';
const CustomerReview = () => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <div className='text-center mt-16'>
                <h1 className='text-4xl font-bold'>Recent Customer Reviews</h1>
            </div>
            <br />
            <div className='grid grid-cols-3 gap-4'>
                {
                    reviews.slice(0, 3).map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
            <br />
            <div className='text-center pb-8'>
                <button className='bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded see-btn  ' onClick={() => navigate("/reviews")}>See All Reviews</button>
            </div>
        </div>
    );
};

export default CustomerReview;