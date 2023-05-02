import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const RecipeInfo = () => {
    const recipes = useLoaderData()

    const { picture, name, description, number_of_recipes, years_of_experience, likes } = recipes
    console.log(recipes)
    return (
        <Container className=' mt-5 mx-auto'>
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default RecipeInfo;