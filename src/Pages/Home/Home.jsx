import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'

const Home = () => {
    const chefs = useLoaderData()
    return (
        <div className='mt-5'>
            <h1 className='text-center text-warning fw-bold fs-1 mt-5 mb-2'>Our Chefs</h1> <hr className='w-25 mx-auto mb-5 text-success' />
            
        </div>
    );
};

export default Home;