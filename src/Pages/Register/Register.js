import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container>
            <Form className='w-80%'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full  Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control name="photoURl" type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='m-2' variant="primary" type="submit">
                    Register
                </Button>
                <br></br>
                <Form.Text className="text-muted mb-5">
                    Aready Have an account? <Link to='/login'>Login</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;