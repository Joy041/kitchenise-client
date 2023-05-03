import React, { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const RecipeInfo = () => {
    const recipes = useLoaderData()
    const [use, setUse] = useState(false)
    const [use2, setUse2] = useState(false)
    const [use3, setUse3] = useState(false)

    const { picture, name, description, number_of_recipes, years_of_experience, likes, recipes_1, recipes_2, recipes_3 } = recipes;

    const handleFavoriteBtn1 = () => {
        alert('Add to favorite')
        setUse(true)
    }
    const handleFavoriteBtn2 = () => {
        alert('Add to favorite')
        setUse2(true)
    }
    const handleFavoriteBtn3 = () => {
        alert('Add to favorite')
        setUse3(true)
    }
    return (
        <Container className=' mt-5 mx-auto'>
            <Card>
                <Card.Header as="h5" className='d-flex align-items-center gap-2'><img src={picture} className='rounded-circle feedback-img me-3' style={{ width: '60px' }} alt="" /><p className='fw-semibold fs-3'>{name}</p></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <p><span className='fw-bold fs-5'>Description :</span><span className='text-secondary fw-medium'> {description}</span></p>
                        <p><span className='fw-bold fs-5'>Number of recipes :</span><span className='fs-4'> {number_of_recipes}.</span></p>
                        <p><span className='fw-bold fs-5'> Years of experience :</span><span className='fs-4'> {years_of_experience} Years.</span></p>
                        <p><span className='fw-bold fs-5'> Number of Like :</span><span className='fs-4'> {likes} likes.</span></p>
                    </Card.Text>
                </Card.Body>
            </Card>
            <div className='d-md-flex justify-content-md-between mt-5 mb-5'>
                <Card style={{ width: '18rem' }} className='mx-auto mt-4'>
                    <Card.Img variant="top" style={{ height: '200px' }} src={recipes_1?.img} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>{recipes_1?.recipe_name}</Card.Title> <hr className=' text-success ' />
                        <Card.Text>
                            <span className='fw-bold '>Ingredients : </span> {recipes_1?.ingredients}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold '>Method of cooking : </span> {recipes_1?.method_of_cooking}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold '>Rating : </span><Rating
                                style={{ maxWidth: 150 }}
                                value={recipes_1?.rating}
                                readOnly
                            />
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary" onClick={handleFavoriteBtn1} disabled={use} className='w-50 mx-auto mb-3'>Favorite</Button>
                </Card>
                <Card style={{ width: '18rem' }} className='mx-auto mt-4'>
                    <Card.Img variant="top" style={{ height: '200px' }} src={recipes_2?.img} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>{recipes_2?.recipe_name}</Card.Title> <hr className=' text-success ' />
                        <Card.Text>
                            <span className='fw-bold '>Ingredients : </span> {recipes_2?.ingredients}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold '>Method of cooking : </span> {recipes_2?.method_of_cooking}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold '>Rating : </span><Rating
                                style={{ maxWidth: 150 }}
                                value={recipes_2?.rating}
                                readOnly
                            />
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary" onClick={handleFavoriteBtn2} disabled={use2} className='w-50 mx-auto mb-3'>Favorite</Button>
                </Card>
                <Card style={{ width: '18rem' }} className='mx-auto mt-4'>
                    <Card.Img variant="top" style={{ height: '200px' }} src={recipes_3?.img} />
                    <Card.Body>
                        <Card.Title className='fw-bold fs-3'>{recipes_3?.recipe_name}</Card.Title> <hr className=' text-success ' />
                        <Card.Text>
                            <span className='fw-bold '>Ingredients : </span> {recipes_3?.ingredients}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold '>Method of cooking : </span> {recipes_3?.method_of_cooking}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold '>Rating : </span><Rating
                                style={{ maxWidth: 150 }}
                                value={recipes_3?.rating}
                                readOnly
                            />
                        </Card.Text>
                    </Card.Body>
                    <Button variant="primary" onClick={handleFavoriteBtn3} disabled={use3} className='w-50 mx-auto mb-3'>Favorite</Button>
                </Card>
            </div>
        </Container>
    );
};

export default RecipeInfo;