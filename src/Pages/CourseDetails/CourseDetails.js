import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
import { Container } from 'react-bootstrap';

const ref = React.createRef();

const CourseDetails = () => {
    const { id } = useParams();
    console.log(id)
    // const [courseDetails, SetCourseDetails] = useState([]);

    const details = useLoaderData();

    const Eachdetails = details.find(n => n._id === id);
    console.log(Eachdetails)


    return (
        <div >

            <Container>
                <Card className='mx-auto p-2' >
                    <div className='d-flex justify-content-around m-2'>
                        <Card.Header> <h2>{Eachdetails.title}</h2></Card.Header>
                        <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <Button variant='outline-dark' onClick={toPdf}>Course Details  Pdf</Button>}
                        </Pdf>
                    </div>
                    <Card.Body style={{ width: '300px', height: '100%' }} ref={ref}>
                        <Card.Title> </Card.Title>
                        <Card.Img variant="top" className='img-fluid' src={Eachdetails.author.img} />
                        <Card.Text className='p-3'>
                            <h5>{Eachdetails.details}</h5>
                        </Card.Text>
                        <Link className='text-decoration-none' to={`/checkout/${id}`}> <Button variant="warning">Get Premium access </Button></Link>
                    </Card.Body>
                </Card>

            </Container>

        </div>
    );
};

export default CourseDetails;