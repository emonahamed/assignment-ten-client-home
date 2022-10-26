import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaBeer, FaGithub, FaGoogle, HiComputerDesktop } from 'react-icons/fa';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container className='d-flex align-items-center justify-content-between'>
                {/* <Navbar.Brand href="#home"> <FaGoogle></FaGoogle>Developer Bee</Navbar.Brand> */}
                <Navbar.Brand href="#home">  <span className='text-color:success'><FaBeer></FaBeer></span> Developer Bee</Navbar.Brand>
                <Nav className='options'>
                    <Link to="/courses">courses</Link>
                    <Link to="/faq">Faq</Link>
                    <Link to="/blog">blog</Link>
                    <Link to="/login">  Login</Link>

                    <FaGithub></FaGithub>

                </Nav>

            </Container>
        </Navbar>
    );
};

export default Header;