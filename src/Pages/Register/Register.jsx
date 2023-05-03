import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import NavigationBar from '../../SharedPage/NavigationBar/NavigationBar';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { register, profile, verification, googleLogin, githubLogin } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate()


    const handelRegisterForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, photo, password, confirm)

        setError('');
        setSuccess('')

        if (password !== confirm) {
            alert('confirm password not match')
            return;
        }

        else if (password.length < 8) {
            setError('Should contain at last 8 characters')
            return;
        }

        else if (!/(?=.*\d)/.test(password)) {
            setError('Should contain at last one digit')
            return;
        }

        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Should contain at last one upper case')
            return;
        }

        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Should contain at last one lower case')
            return;
        }

        register(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess('Register successful')
                console.log(loggedUser)
                form.reset()
                userProfile(loggedUser, name, photo)
                emailVerification(loggedUser)
                navigate('/login')
            })
            .catch(error => setError(error.message))

    }

    const userProfile = (user, name, photo) => {
        profile(user, name, photo)
            .then(() => { })
            .catch(error => setError(error.message))
    }

    const emailVerification = (user) => {
        verification(user)
            .then(result => {
                alert('Check your email')
                return
            })
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    const handleGoogleRegister = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('Login Successful')
            navigate('/login')
        })
        .catch(error => setError(error.message))
    }


    const handleGithubRegister = () => {
        githubLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            setSuccess('Login Successful')
            navigate('/login')
        })
        .catch(error => setError(error.message))
    }

    return (
        <div>
            <div className='mt-md-5 border login-width mx-auto py-5 rounded bg-light'>
                <h2 className='text-center'>Register your account</h2><hr className='w-75 mx-auto' />
                <Form className='w-75 mx-auto mt-5' onSubmit={handelRegisterForm}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Photo url</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="Photo url" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name='confirm' placeholder="Confirm Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept Terms and Condition</>} required />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <p className='text-success'>{success}</p>
                    <Button variant="primary" disabled={!accepted} type="submit" className='w-100  fs-5'>
                        Register
                    </Button>
                    <p className='mt-3 text-center'>Already Have An Account ? <Link to='/login' className='text-decoration-none'>Login</Link></p>
                    <p className='text-center'>-----------------OR-----------------</p>
                    <Button variant="primary" onClick={handleGoogleRegister} type="submit" className='w-100 bg-white text-black border-dark fw-semibold'>
                       <FaGoogle></FaGoogle> Register with Google
                    </Button>
                    <Button variant="primary" onClick={handleGithubRegister} type="submit" className='w-100 bg-white text-black border-dark fw-semibold mt-4'>
                       <FaGithub></FaGithub> Register with Github
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;