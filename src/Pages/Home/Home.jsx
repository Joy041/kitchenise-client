import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import { Container } from 'react-bootstrap';
import ChefInfo from '../ChefInfo/ChefInfo';

const Home = () => {
    const chefs = useLoaderData()
    return (
        <div className='mt-5'>
            <h1 className='text-center text-warning fw-bold fs-1 mt-5 mb-2'>Our Chefs</h1> <hr className='w-25 mx-auto mb-5 text-success' />
            <Container>
                <div className='make-grid mt-5'>
                    {
                        chefs.map(chef => <ChefInfo
                            key={chef._id}
                            chef={chef}
                        ></ChefInfo>)
                    }
                </div>
            </Container>
        </div>
    );
};

export default Home;