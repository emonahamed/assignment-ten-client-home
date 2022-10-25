import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';

const Courses = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://developer-bee-server-7i9rd3x6t-emonahamed.vercel.app/courses')
            // https://developer-bee-server.vercel.app/courses
            // https://developer-bee-server-ljb6wk3sr-emonahamed.vercel.app/courses')
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
                            categories.map(category => <p key={category._id}>

                                <Link to={`/courses/${category._id}`}>{category.author.name}</Link>
                            </p>)

                        }

                    </Col>

                    <Col lg="8">
                        {
                            categories.map(category => <TopicCard category={category}></TopicCard>)
                        }

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;