import React from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa"
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');

    const { providerLogin, signIn, setLoading } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleGoogleSignIn = () => {

        providerLogin(googleProvider)

            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
    }



    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button className='m-2' variant="primary" type="submit">
                    Login
                </Button>
                <div>
                    <ButtonGroup className='p-2'>
                        <Button onClick={handleGoogleSignIn} className='mx-2' variant='outline-primary'> <FaGoogle></FaGoogle>  signIn with google</Button>
                        <Button onClick={handleGithubSignIn} variant='outline-dark'>  <FaGithub></FaGithub>  signIn with github</Button>
                    </ButtonGroup>
                </div>
                <br></br>
                <Form.Text className="text-muted mb-5">
                    New to this website ? <Link to='/register'>Register</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    {error}

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;