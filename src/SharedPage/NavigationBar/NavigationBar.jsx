import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home" className='fw-bold fs-1'><span className='text-success'>Kitchen</span>ise</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to = '/' className='text-decoration-none text-black fw-semibold fs-5'>Home</Link>
                        <Link to = '/blog' className='text-decoration-none text-black fw-semibold fs-5 mx-3'>Blog</Link>
                    </Nav>
                    <Nav>
                        <Button><Link to = '/login' className='text-white text-decoration-none fw-semibold'>Login</Link></Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;