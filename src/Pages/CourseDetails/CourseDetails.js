import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CourseDetails = () => {
    const { id } = useParams();
    // const [courseDetails, SetCourseDetails] = useState([]);

    const details = useLoaderData();

    const Eachdetails = details.find(n => n._id === id);
    console.log(Eachdetails)


    return (
        <div>
            <Card>
                <Card.Header> <h2>{Eachdetails.title}</h2></Card.Header>
                <Card.Body>
                    <Card.Title> </Card.Title>
                    <Card.Img variant="top" src={Eachdetails.author.img} />
                    <Card.Text className='p-3'>
                        <h5>{Eachdetails.details}</h5>
                    </Card.Text>
                    <Button variant="warning">Get Premium access</Button>
                </Card.Body>
            </Card>





        </div>
    );
};

export default CourseDetails;