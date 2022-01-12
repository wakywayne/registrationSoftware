import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Card, Button } from 'react-bootstrap';




export default function NavbarComponent() {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        alert("You've been logged out");
        navigate("/");
    }

    return (
        <Navbar style={{ borderBottom: "2px solid black" }} bg="primary" sticky="top" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                <div className="Logo ms-5"></div>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link><NavLink className="nav-link nav-hover" to="/"><Button variant="outline-light">Home</Button></NavLink> </Nav.Link>
                    {/* <Nav.Link><div className="nav-link nav-hover" onClick={logout}>Logout</div> </Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
