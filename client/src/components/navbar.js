import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap'

const Navigation = () => {

    return (
        <Container>
        <Navbar bg="light" variant="light" expand="lg" className="navbar">
            <Navbar.Brand >Naviation Bar</Navbar.Brand>    
            <div className="links">
                <Link to="/">Users Page</Link>
                <span>---</span>
                <Link to="/bloglist">Blog List</Link>
                <span>---</span>
                <Link to="/blog">Blog Page</Link>
            </div>
            <br/>
            <br/>
        </Navbar>
        </Container>
    )
}


export default Navigation;