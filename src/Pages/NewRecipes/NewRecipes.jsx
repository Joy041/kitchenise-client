import React from 'react';
import { Button, Card } from 'react-bootstrap';
import firstRecipe from '../../assets/recipes-1.webp'
import secondRecipe from '../../assets/recipes-2.webp'
import thirdRecipe from '../../assets/recipes-3.webp'
import forthRecipe from '../../assets/recipes-4.webp'

const NewRecipes = () => {
    return (
        <div className='bg-light py-5 mt-'>
            <h1 className='text-center mt-5 mb-2 fw-bold fs-1'>New Recipes</h1><hr className='w-25 mx-auto text-success mb-5' />
            <div className='d-md-flex justify-content-md-evenly ms-5 mt-5'>
                <Card style={{ width: '18rem' }} className='ms-5 mt-4'>
                    <Card.Img variant="top" style={{height: '200px'}} src={firstRecipe} />
                    <Card.Body>
                        <Card.Title>Tandoori Chicken</Card.Title>
                        <Card.Text>
                            This dish has a great deal to offer in terms of flavor. This is partially due to the way that it is cooked in clay ovens known as tandoor ovens. The cooking process results in succulent and smoky meat. Of course, the marinade adds quite a bit to the taste as well. The marinade is composed of yogurt, tandoori masala, cumin, and nutmeg. Once doused in the spices, the chicken is skewered and then place in the oven until done.
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary" className='w-75 mx-auto mb-3'>Let's cook</Button>
                </Card>
                <Card style={{ width: '18rem' }} className='ms-5 mt-4'>
                    <Card.Img variant="top" c style={{height: '200px'}} src={secondRecipe} />
                    <Card.Body>
                        <Card.Title>Chilaquiles</Card.Title>
                        <Card.Text>
                            Chilaquiles is a rather common breakfast in Mexico, probably because it is the perfect way to start your day. Chilaquiles consist of corn tortillas that have been quartered and fried. They are topped off with salsa, either red or green will do.
                            You will often find that eggs, pulled chicken, cream, cheese, and refried beans (frijoles) are doused on top as well.
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary" className='w-75 mx-auto mb-3'> Let's cook</Button>
                </Card>
                <Card style={{ width: '18rem' }} className='ms-5 mt-4'>
                    <Card.Img variant="top" style={{height: '200px'}} src={thirdRecipe} />
                    <Card.Body>
                        <Card.Title>Sea Urchin Pasta</Card.Title>
                        <Card.Text>
                            Sea urchins are spherical, hard-shelled animals generally found on the seabed of every ocean. They usually live in cracks and crevices on coastal rocks and reefs. Despite the fact that it may appear odd to consume the spiny sea urchin, it is in fact relished in several countries around the world.
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary" className='w-75 mx-auto mb-3'>Let's cook</Button>
                </Card>
                <Card style={{ width: '18rem' }} className='ms-5 mt-4'>
                    <Card.Img variant="top" style={{height: '200px'}} src={forthRecipe} />
                    <Card.Body>
                        <Card.Title>Korma</Card.Title>
                        <Card.Text>
                            Korma is stewed in a tangy and flavorful combination of yogurt, saffron, and various other spices. Although there are vegetarian options, the dish is most commonly made with meat. Despite the use of spices, korma is fairly mild. This doesn’t make it any less tasty, however.
                            The actual components of a korma will vary depending on the region that you are visiting.
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary" className='w-75 mx-auto mb-3'>Let's cook</Button>
                </Card>
            </div>
        </div>
    );
};

export default NewRecipes;