import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-dark p-5 mt-2'>
            <Container className='footer-grid'>
                <div className='me-5'>
                    <h1 className='fw-bold fs-1 text-white'><span className='text-success'>Kitchen</span>ise</h1>
                    <p className='text-white'>Kitchenise is a food recipes based website. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ea!</p>
                </div>
                <div>
                    <h1 className='text-white'>Need help?</h1>
                    <p className='text-white'>Contact us via phone or email</p>
                    <p className='text-white ms-0'><span className='text-warning'>T</span> : +915231456987</p>
                    <p className='text-white'><span className='text-warning'>E</span> : Kitchenise@gmail.com</p>
                </div>
                <div>
                    <h1 className='text-white'>Follow us</h1>
                    <p className='text-white w-25 block bg-info rounded-circle'><FaFacebook className='w-100'></FaFacebook></p>
                    <p className='text-white w-25 block bg-danger rounded-circle'><FaInstagram className='w-100'></FaInstagram></p>
                    <p className='text-primary w-25 block bg-white rounded-circle'><FaTwitterSquare className='w-100'></FaTwitterSquare></p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;