import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import './ChefInfo.css'
import { Link } from 'react-router-dom';


const ChefInfo = ({ chef }) => {
    const { _id, name, picture, years_of_experience, number_of_recipes, likes } = chef;
    
    return (
        <div className=' d-flex justify-content-center align-items-center'>
            <Card style={{ width: '18rem' }} className='h-100'>
                <Card.Img variant="top" className='h-100' src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Years of experience : {years_of_experience}
                    </Card.Text>
                    <Card.Text>
                        Number of recipes : {number_of_recipes}
                    </Card.Text>
                    <Card.Text>
                       Likes : {likes}
                    </Card.Text>
                </Card.Body>
                <Link to = {`/recipes/${_id}`}><button className='btn btn-primary w-100 view-recipes-btn'>View recipes</button></Link>
            </Card>
        </div>
    );
};

export default ChefInfo;