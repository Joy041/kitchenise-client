import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import { FaFacebook, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-dark p-5 mt-2'>
            <Container className='footer-grid'>
                <div>
                    <h1 className='fw-bold fs-1 text-white'><span className='text-success'>Kitchen</span>ise</h1>
                    <Link className='text-decoration-none fw-semibold text-white fs-5'>Home</Link>
                    <Link className='text-decoration-none fw-semibold text-white fs-5 ms-4'>Blog</Link>
                    
                </div>
                <div className='text-center'>
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