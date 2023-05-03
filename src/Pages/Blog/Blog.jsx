import React, { useState } from 'react';
import NavigationBar from '../../SharedPage/NavigationBar/NavigationBar';
import { Container } from 'react-bootstrap';
import { jsPDF } from "jspdf";
import Footer from '../Footer/Footer';
import html2canvas from 'html2canvas';

const Blog = () => {
    const [loader, setLoader] = useState(false);

    const downloadPdf = () => {
        const capture = document.querySelector('.actual-receipt');
        setLoader(true);
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            setLoader(false);
            doc.save('receipt.pdf')
        })
    }

    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='actual-receipt'>
                <div>
                    <h4 className='text-center mt-5 fs-2'>Controlled vs Uncontrolled components</h4><hr className='w-50 mb-5 mx-auto' />
                    <Container className='d-flex gap-5'>
                        <div>
                            <p className='text-center fs-5 fw-semibold'>Controlled components</p>
                            <p>We handle with state to get value from input field or use it and use it through onClick, onChange etc. These are called controlled components. Because we can handle them directly.</p>
                        </div>
                        <div>
                            <p className='text-center fs-5 fw-semibold'>Uncontrolled components</p>
                            <p>We often handle a field through getElementById, getElementByClassName etc. We cannot do this handling directly. This is done by dom. So they are called uncontrolled components.</p>
                        </div>

                    </Container>
                </div>
                <div>
                    <h4 className='text-center mt-5 fs-2'>How to validate React props using PropTypes</h4><hr className='w-50 mb-5 mx-auto' />
                    <Container>We can use propTypes to tell the information brought by the props in which format that information should be written. By doing this, if the information is not written in the format that we have mentioned, then it will be told with an error. And if you don't use propsTypes, you won't get this error. This makes it difficult to find where the error occurred.</Container>
                </div>
                <div>
                    <h4 className='text-center mt-5 fs-2'>What is a custom hook, and why will you create a custom hook?</h4><hr className='w-50 mb-5 mx-auto' />
                    <Container>Sometimes a function or different hook has to be written repeatedly in different places. We can create our own custom hook by first typing use and then giving it a name. If we write that function or hook inside that custom hook and write our custom hook where it needs to be written, the work done with that custom hook will be the same as before. By doing this, we don't have to write that function or hook again and again. At that point, you only need to call the custom hook.</Container>
                </div>
                <div>
                    <h4 className='text-center mt-5 fs-2'>Node.js vs Express.js </h4><hr className='w-50 mb-5 mx-auto' />
                    <Container className='d-flex gap-5'>
                        <div>
                            <p className='text-center fs-5 fw-semibold'>Node.js</p>
                            <p>Node.js is open-source, cross-platform JavaScript code that runs on servers. It uses an asynchronous event-driven model and is designed to build scalable network applications. It's built on Google Chrome v8 engine,which makes it fast and efficient to develop apps. It's lightweight and efficient for the server environment connections with low latency. But it take long coding time compared to express.js</p>
                        </div>
                        <div>
                            <p className='text-center fs-5 fw-semibold'>Express.js</p>
                            <p>Express.js is a web application framework for Node js. It provides various features that make web application development fast an easy because it adds functions to Node.js is already existing function. Express.js is a minimal and flexible Node Js Framework that provides a robust set of features for web applications like routing, sessions etc. Express take less coding time compared to Node.js. It is easy to use by npm installation</p>
                        </div>

                    </Container>
                </div>
            </div>
            <div className='text-center'>
                <button className='btn btn-primary my-5' onClick={ downloadPdf } disabled={!(loader === false)}>
                    {loader ? (
                        <span>Downloading...</span>
                    ) : (
                        <span>Download pdf</span>
                    )}
                </button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;