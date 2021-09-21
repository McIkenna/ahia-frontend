import React from 'react'
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { FiShoppingCart } from 'react-icons/fi'
import {LinkContainer} from 'react-router-bootstrap'
function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" CollapseOnSelect>
                <Container>
                    <LinkContainer to ="/">
                    <Navbar.Brand href="#">AHIA</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                            <Nav.Link >Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/Orders">
                            <Nav.Link >Orders</Nav.Link>
                            </LinkContainer>
                             <NavDropdown title="Account & Lists" id="navbarScrollingDropdown">
                                <LinkContainer to="/login">
                                    <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
                                </LinkContainer>
                                <LinkContainer to="/logout">
                                    <NavDropdown.Item >SignOut</NavDropdown.Item>
                                </LinkContainer>
                                    <NavDropdown.Divider />
                                    <LinkContainer to="/register">
                                    <NavDropdown.Item >Register</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>

                          <LinkContainer to="/Cart">
                            <Nav.Link  >
                                <FiShoppingCart /> Cart
                            </Nav.Link>
                        </LinkContainer>
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
