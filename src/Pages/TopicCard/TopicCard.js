import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './TopicCard.css'

const TopicCard = ({ category }) => {
    console.log(category)



    const { author, image_url } = category
    // console.log(author)



    return (
        <div className='p-5'>

            <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{author.name}</Card.Title>
                    {/* <Button variant="outline-primary"> <Link className='topic-link' to={`/courses/${category._id}`}>Show details</Link></Button> */}
                    <Link className='topic-link' to={`/courses/${category._id}`}><Button variant="outline-primary">Course details </Button></Link>
                </Card.Body>
            </Card>





        </div>



    );
};

export default TopicCard;