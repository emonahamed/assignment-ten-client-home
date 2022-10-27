import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';
import './Courses.css'

const Courses = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://developer-bee-server-7i9rd3x6t-emonahamed.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    console.log(categories)

    return (
        <div>
            <Container>
                <Row>
                    <Col className='p-5' lg="4">

                        {
                            categories.map(category => <p className='m-5' key={category._id}>

                                <span className='m-3' > <Link className='author-name' to={`/courses/${category._id}`}>{category.author.name}</Link></span>
                            </p>)

                        }

                    </Col>

                    <Col className='d-flex flex-wrap' lg="8">
                        {
                            categories.map(category => <div ><TopicCard category={category}></TopicCard></div>)
                        }

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;