import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Navbar from '../Navbar/Navbar';
import './Home.css'
const Home = () => {


    return (
        <div>
            <section className='title'>
                <div>
                    <h1>THE REVIEW EXPERT</h1>
                </div>
                <div>
                    {/* <img className='image' src="https://cdn.techjuice.pk/wp-content/uploads/2017/11/Aliexpress-Singles-Day-Sale-1280x720.jpg" alt="" /> */}
                    <h1>Image</h1>
                </div>
            </section>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;