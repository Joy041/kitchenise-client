import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const NavigationBar = () => {
   const {user, logout} = useContext(AuthContext)

   const handleLogout = () => {
        logout()
        .then(result => {
            alert('Logout successful')
        })
   }

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
                    <Nav.Link href="#deets">{
                                user ? <div className='fw-bold'>Welcome <img src={user.photoURL} className={`me-3 rounded`} style={{ width: '40px', }} alt="" /></div> : <>Profile</>
                            }</Nav.Link>
                            <Button variant="secondary">{
                                user ? <Link onClick={handleLogout} className='text-decoration-none text-black' to = '/login'>Logout</Link> : <Link to='/login' className='text-decoration-none text-black' >Login</Link>
                            }</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;