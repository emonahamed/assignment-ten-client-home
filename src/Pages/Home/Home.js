import React from 'react';
import { Container } from 'react-bootstrap';
import myimage from '../../assets/myimage.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <h3 className='p-2 text-success'>Advanced Web Development Course in  Bangladesh</h3>
            <img className='image img-fluid' src={myimage}></img>


            <h6 className='mx-3 p-3'>Wnat to Be a Full stack developer ?
                <br />
                Visit Our Courses page and Enroll Now
            </h6>


        </div>
    );
};

export default Home;