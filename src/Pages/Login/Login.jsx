import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import './Login.css'


const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const { login, passwordReset, googleLogin, githubLogin } = useContext(AuthContext);
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const [accepted, setAccepted] = useState(false);


    const from = location.state?.from?.pathname || '/'


    const handleLoginForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email,password)

        setError('');
        setSuccess('')

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('Login successful')
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }

    const handleForgetPass = () => {
        const email = emailRef.current.value
        passwordReset(email)
            .then(result => {
                alert('Check your email')
                return
            })
            .catch(error => setError(error.message))

    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            setSuccess('Login Successful')
            navigate(from, { replace: true })
        })
        .catch(error => setError(error.message))
    }


    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
            const loggedUser = result.user;
            setSuccess('Login Successful')
            navigate(from, { replace: true })
        })
        .catch(error => setError(error.message))
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }




    return (
        <div>
            <div className='mt-md-5 border login-width mx-auto py-5 rounded bg-light'>
                <h2 className='text-center'>Login your account</h2><hr className='w-75 mx-auto' />
                <Form className='w-75 mx-auto mt-5' onSubmit={handleLoginForm}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' ref={emailRef} placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                        <button onClick={handleForgetPass} className='border-0 bg-light mt-2 ps-0 text-decoration-underline' >Forget password</button>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleAccepted} type="checkbox" label="Check me out" required />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{success}</p>
                    <Button variant="primary" disabled={!accepted} type="submit" className='w-100'>
                        Login
                    </Button>
                    <p className='mt-3 text-center'>Don’t Have An Account ? <Link to='/register' className='text-decoration-none'>Register</Link></p>
                    <p className='text-center'>-----------------OR-----------------</p>
                    <Button variant="primary" onClick={handleGoogleLogin} type="submit" className='w-100 bg-white text-black border-dark fw-semibold'>
                        <FaGoogle></FaGoogle> Login with Google
                    </Button>
                    <Button variant="primary" onClick={handleGithubLogin} type="submit" className='w-100 bg-white text-black border-dark fw-semibold mt-4'>
                        <FaGithub></FaGithub> Login with Github
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;