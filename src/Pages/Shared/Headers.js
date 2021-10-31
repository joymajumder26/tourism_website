import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css';
import logo from '../../images/banner/logo-1.png'

const Headers = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar className="header" sticky="top" collapseOnSelect expand="lg" >
        <Container >
          <img style={{ width: 100, height: 45 }} src={logo} alt="" />
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="li" as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link className="li" as={HashLink} to="/home#about">About</Nav.Link>
            <Nav.Link className="li" as={HashLink} to="/home#places">Places</Nav.Link>
            <Nav.Link className="li" as={HashLink} to="/addService">Add/Delete Places</Nav.Link>
            <Nav.Link className="li" as={HashLink} to="/manageOrder">My Orders</Nav.Link>
            <Nav.Link className="li" as={HashLink} to="/manageAllOrders">Manage All Orders</Nav.Link>
            {user?.email ?
              <Button onClick={logOut} variant="light">LogOut</Button> :
              <Nav.Link className="li" as={Link} to="/registration">Login</Nav.Link>}
            <Navbar.Text className="text-success ">
              Signed in as: <a className="text-white">{user?.displayName}</a>

            </Navbar.Text>
          </Navbar.Collapse>

        </Container>
      </Navbar>


    </>
  );
};

export default Headers;