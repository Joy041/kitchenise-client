import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';

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
                    
                        <ActiveLink to = '/'>Home</ActiveLink>
                        <ActiveLink to = '/blog'>Blog</ActiveLink>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#deets">{
                                user ? <div className='fw-bold'><a href="#" data-toggle="tooltip" title={`${user.displayName}`}> <img src={user.photoURL} className={`me-3 rounded`} style={{ width: '30px', }} alt="" /></a> </div> : <>Profile</>
                            }</Nav.Link>
                            <Button variant="secondary">{
                                user ? <Link onClick={handleLogout} className='text-decoration-none text-black px-3' to = '/login'>Logout</Link> : <Link to='/login' className='text-decoration-none text-black' >Login</Link>
                            }</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;