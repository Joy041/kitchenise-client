import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mt-5'>
            <h1 className='fw-bold fs-1'>Oops!</h1>
            <h1 className='fw-bold fs-5'>404 not found</h1>
            <p>Sorry, an error has occured. Requested page not found!</p>
            <Link to = '/'><button className='btn btn-primary'>Back to Home</button></Link>
        </div>
    );
};

export default Error;