import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        overflow: hidden;
        background-color: #f1f1f1;
        padding: 20px 80px;
        position: fixed;
        width: 100%
        top: 10;
        z-index: 99;
    }
    .smaller {
        padding: 0px;
        transition: 0.4s;
    }

    .smaller .navbar-brand{
        line-height: 55px;
        font-size: 25px;
        text-align: center;
        transition: 0.4s;
        width: 150px;
        height: 75px;
    }

    .navbar-brand{
        font-size: 30px;
        font-weight: bold;
        transition: 0.4s;

    }

    .navbar-nav .nav-link {
        float: left;
        background-color: #f1f1f1;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 25px;
        border-radius: 4px;
        &:hover {
            color: yellow;
        }
    }

    .smaller .navbar-nav .nav-link {
        text-align: center;
        transition: 0.4s;
        text-decoration: none;
        font-size: 15px;
        &:hover {
            color: yellow;
        }
    }

    @media screen and (max-width: 992px) {
        .navbar-nav .nav-link {
            float: none;
            display: block;
            text-align: center;
        }

    }
`;

export const NavigationBar = (props) => (
    <Styles>
        <Navbar id = "header" expand ="lg">
            <Navbar.Brand href="/">Code Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/meetus">Meet Our Kids</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact Us</Nav.Link></Nav.Item>
                    {
                        props.isAuthenticated ?
                        <Nav.Item>Logout</Nav.Item>
                        :
                        <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>

                    }
                    <Nav.Item><Nav.Link href="/signup">Sign Up</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset  || 
    document.documentElement.scrollTop, 
    shrinkOn =1,       
    headerEL = document.getElementById('header');
    if (distanceY > shrinkOn) {
        headerEL.classList.add("smaller");
    } else {
        headerEL.classList.remove("smaller");
    }
}

window.addEventListener('scroll', resizeHeaderOnScroll);