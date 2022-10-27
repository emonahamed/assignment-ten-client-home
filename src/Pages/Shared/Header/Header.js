import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBeer, FaGithub, FaGoogle, HiComputerDesktop } from 'react-icons/fa';
import './Header.css'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { useState } from 'react';

const Header = () => {


    const [color, setColor] = useState(false);

    const buttonClick = () => {

        setColor(!color)
    }


    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <Navbar bg="dark" variant="dark">
            <Container className='d-flex flex-wrap align-items-center justify-content-between'>
                <div>
                    <Link className='website-name' to='/home'><FaBeer></FaBeer> Developer Bee</Link>
                </div>
                <div>
                    <Nav className='options '>
                        <Link to="/courses">Courses</Link>
                        <Link to="/faq">FAQ</Link>
                        <Link to="/blog">Blog</Link>
                        <Button onClick={buttonClick} variant="outline-light">
                            {/* {color ? <p className='text-white'>dark</p> : <p>light</p>} */}
                            {color ? <span className=' text-danger'>dark</span> : <span className='  text-light'>light</span>}
                        </Button>
                        {user ?
                            <>
                                <Link onClick={handleLogOut} className='mx-1 rounded' variant='outline-primary'>LogOut</Link>
                                <div title={user?.displayName} >
                                    <Image style={{ height: "40px" }} roundedCircle src={user?.photoURL} />
                                </div>
                            </>
                            :
                            <>
                                <Link to="/login">  Login</Link>
                            </>
                        }
                    </Nav>
                </div>
            </Container>
        </Navbar >
    );
};

export default Header;