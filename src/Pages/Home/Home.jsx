import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'
import { Container } from 'react-bootstrap';
import ChefInfo from '../ChefInfo/ChefInfo';
import NewRecipes from '../NewRecipes/NewRecipes';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    const chefs = useLoaderData()
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-50"
                        src={'https://th.bing.com/th/id/R.7ba9172cb49db711ab1240d4bd420591?rik=gZX8C2%2bmULKBMA&pid=ImgRaw&r=0'}
                        alt="First slide"
                    />
                    <Carousel.Caption className='header-height text-dark fw-bold'>
                        <h1 className='font-style'>Let'<span className='text-black'>s</span> <br /> Start Cooking <br /> <span className='text-black'>with</span> <br /> Popular Recipes</h1>
                        <p className='fs-5'>Want to learn cook but confused how to start? No need to worry again !! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam eligendi aliquid nostrum sapiente quos, optio accusantium doloribus maiores aspernatur cupiditate provident voluptatibus ad esse labore. Temporibus quis ullam eius nobis.</p>
                        <button className='btn btn-warning fs-5 fw-bold text-white py-3 px-5'>JOIN</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-50"
                        src={'https://g.foolcdn.com/editorial/images/167482/vegetables-colorful-array.jpg'}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='header-height text-dark fw-bold'>
                        <h1 className='font-style'>It'<span className='text-black'>s</span> <br /> Even Better <br /> <span className='text-black'>Than</span> <br />
                            an Expensive <br /> Cookery Book</h1>
                        <p className='fs-5'>Let's join us to become a good chef. Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque praesentium expedita beatae voluptatum sit tempore doloremque, temporibus fugiat blanditiis dolores, saepe illo voluptas? Ipsa nobis aliquam repellendus eaque quod ipsam omnis voluptatem excepturi eius dolore.</p>
                        <button className='btn btn-warning fs-5 fw-bold text-white py-3 px-5'>JOIN</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-50"
                        src={'https://th.bing.com/th/id/R.7d5b5e5cd55b25e8c62f26d55c299007?rik=LBpCUVZ88Y4WXA&pid=ImgRaw&r=0'}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='header-height text-dark fw-bold'>
                        <h3 className='font-style'>Fun'<span className='text-black'>s</span> <br /> and Easy <br /> <span className='text-black'>to</span> <br /> Become a <br /> Master Cook</h3>
                        <p className='fs-5'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, corporis maiores commodi dolores odit nulla dolorum sequi unde iste temporibus amet quae autem porro dicta magnam voluptatibus doloremque suscipit. Eum adipisci a fugit unde perferendis beatae! Fuga deserunt exercitationem tenetur?
                        </p>
                        <button className='btn btn-warning fs-5 fw-bold text-white py-3 px-5'>JOIN</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='background-color py-5'>
                <h1 className='text-center fw-bold fs-1 mt-5 mb-2'>Our Chefs</h1> <hr className='w-25 mx-auto mb-5 text-success' />
                <Container>
                    <div className='make-grid'>
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