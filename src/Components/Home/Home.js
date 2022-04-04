import React from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';
import Review from '../Review/Review';
import './Home.css'
const Home = () => {


    return (
        <div>
            <section className='title items-center bg-black'>
                <div className='text-white'>
                    <h1 className='text-6xl font-extrabold name italic'>Suzuki GSX-R150</h1>

                    <h4 className='text-2xl font-mono font-bold mt-1 '>READY TO RACE</h4>

                    <p className='font-semibold text-white mt-4'>Suzuki GSX-R150. A name to be reckoned with. This bike is considered one of the fastest bikes in Bangladesh. The bike came to Bangladesh directly as one of the top contenders in the sports bike segment. This is one of the fastest bikes available in Bangladesh. Suzuki has outdone themselves with this bike.</p>
                </div>
                <div>
                    <img className='image' src="https://www.motorival.com/wp-content/uploads/2020/03/2020-suzuki-gsx-r125-100th-anniversary-decal-01.jpg" alt="" />
                </div>
            </section>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;