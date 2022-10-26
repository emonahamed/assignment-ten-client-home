import React from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa"
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Login = () => {
    const { providerLogin } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }



    return (
        <Container>
            <Form className='w-80%'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='m-2' variant="primary" type="submit">
                    Login
                </Button>
                <div>
                    <ButtonGroup className='p-2'>
                        <Button onClick={handleGoogleSignIn} className='mx-2' variant='outline-primary'> <FaGoogle></FaGoogle>  signIn with google</Button>
                        <Button variant='outline-dark'>  <FaGithub></FaGithub>  signIn with github</Button>
                    </ButtonGroup>
                </div>
                <br></br>
                <Form.Text className="text-muted mb-5">
                    New to this website ? <Link to='/register'>Register</Link>
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;