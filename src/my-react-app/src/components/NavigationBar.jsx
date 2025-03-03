import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const NavigationBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/">
                My App
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/blog">
                    Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                    Profile
                </Nav.Link>
            </Nav>
            <Button variant="outline-danger" onClick={handleLogout}>
                Logout
            </Button>
        </Navbar>
    );
};

export default NavigationBar;