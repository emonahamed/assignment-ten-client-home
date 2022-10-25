import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const TopicCard = ({ category }) => {
    console.log(category)



    const { author, image_url } = category
    // console.log(author)



    return (
        <div className='p-5'>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{author.name}</Card.Title>
                    <Button variant="dark"> <Link to={`/courses/${category._id}`}>Show details</Link></Button>
                </Card.Body>
            </Card>





        </div>



    );
};

export default TopicCard;