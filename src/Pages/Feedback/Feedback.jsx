import React from 'react';
import { Card, Container, InputGroup } from 'react-bootstrap';
import first from '../../assets/feedback-1.jpg'
import second from '../../assets/feedback-2.jpg'
import third from '../../assets/feedback4.jpg'

const Feedback = () => {
    return (
        <div className='py-5'>
            <h1 className='text-center mt-5'>Feedback</h1><hr className='w-25 mx-auto text-success' />
            <div className='d-md-flex justify-content-md-center'>
                <Card style={{ width: '18rem' }} className='ms-5 mt-4'>
                    <Card.Header as="h5"><img src={first} className='rounded-circle me-3' style={{ width: '40px' }} alt="" />Arthur Hilton</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Overall, the food recipe website is well-designed and easy to navigate. The layout is clean and visually appealing, with high-quality images that showcase the dishes. The search functionality is also very useful, allowing users to filter recipes by cuisine, course, ingredients, and more.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='ms-5 mt-4'>
                    <Card.Header as="h5"><img src={second} className='rounded-circle me-3' style={{ width: '40px' }} alt="" />Arthur Hilton</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            One thing that stands out is the quality of the content. The articles are well-written and informative, providing readers with valuable insights and tips. The visuals, such as photos and infographics, also add to the overall presentation and make the content more engaging.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='ms-5 mt-4'>
                    <Card.Header as="h5"><img src={third} className='rounded-circle me-3' style={{ width: '40px' }} alt="" />Arthur Hilton</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            This website has a modern and sleek design. The site's content is also impressive, with a variety of articles and resources that are well-written and informative. The topics covered are diverse and cater to a wide range of interests, which is great for keeping users engaged.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            <Container >
                <h4 className='text-center mt-3'>Write your feedback</h4>
                <div className='text-center d-flex flex-column align-items-center'>
                    <input type="text" name="" id="" className='w-50 my-4 p-4' placeholder='Write your feedback //' />
                    <button  className='btn btn-warning border-0 w-25'>Submit</button>
                </div>
            </Container>
        </div>
    );
};

export default Feedback;