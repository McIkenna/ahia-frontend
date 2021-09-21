import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { FiShoppingCart } from 'react-icons/fi'
import { RiAccountCircleLine } from 'react-icons/ri'
function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" CollapseOnSelect>
                <Container>
                    <Navbar.Brand href="#">SHOOPERS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Orders">Orders</Nav.Link>
                            <div>
                                <RiAccountCircleLine />
                                <NavDropdown title="Account & Lists" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                                    <NavDropdown.Item href="/Logout">SignOut</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/Register">Register</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <Nav.Link href="/Cart" >
                                <FiShoppingCart /> Cart
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    )
}

export default Header
