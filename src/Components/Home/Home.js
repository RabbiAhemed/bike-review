import React from 'react';
import Header from '../Header/Header';
import './Home.css'
const Home = () => {
    return (
        <div>
            <section className='title'>
                {/* <Header></Header> */}
                <div>
                    <h1>THE REVIEW EXPERT</h1>
                </div>
                <div>
                    <img className='image' src="https://cdn.techjuice.pk/wp-content/uploads/2017/11/Aliexpress-Singles-Day-Sale-1280x720.jpg" alt="" />
                </div>
            </section>
        </div>
    );
};

export default Home;