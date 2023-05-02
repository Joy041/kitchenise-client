import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import { Container } from 'react-bootstrap';
import ChefInfo from '../ChefInfo/ChefInfo';
import NewRecipes from '../NewRecipes/NewRecipes';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';

const Home = () => {
    const chefs = useLoaderData()
    return (
        <div>
            <div className='background-color py-5 '>
                <h1 className='text-center fw-bold fs-1 mt-5 mb-2'>Our Chefs</h1> <hr className='w-25 mx-auto mb-5 text-success' />
                <Container className='ps-5 pe-0'>
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
            <NewRecipes></NewRecipes>
            <Feedback></Feedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;