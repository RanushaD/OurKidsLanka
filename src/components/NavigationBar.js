import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        overflow: hidden;
        background-color: #f1f1f1;
        padding: 40px 80px;
        transition: 0.4s;
        position: fixed;
        width: 100%
        top: 0;
        
        z-index: 99;
    }
    .smaller {
        padding-top: 0px;
        transition: 0.4s;
    }

    .smaller .navbar-brand{
        line-height: 55px;
        font-size: 35px;
        transition: 0.4s;
        margin: 0;
        width: 150px;
        height: 75px;
    }

    .navbar-brand{
        font-size: 55px;
        font-weight: bold;
        transition: 0.4s;

    }

    .smaller .navbar-nav .nav-link {
        float: left;
        color: red;
        text-align: center;
        padding: 12px;
        transition: 0.4s;
        text-decoration: none;
        font-size: 15px;
        line-height: 35px;
        border-radius: 4px;
        &:hover {
            color: yellow;
        }
    }

    .navbar-nav .nav-link {
        float: left;
        color: red;
        text-align: center;
        padding: 12px;
        transition: 0.4s;
        text-decoration: none;
        font-size: 18px;
        line-height: 25px;
        border-radius: 4px;
        &:hover {
            color: yellow;
        }
    }
    @media screen and (max-width: 580px) {
        .navbar{
            padding: 20px 10px !important;
        }
        .navbar-nav .nav-link {
            float: none;
            display: block;
            text-alighn:left;
        }

    }
`;

export const NavigationBar = () => (
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
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)

function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset  || 
    document.documentElement.scrollTop, 
    shrinkOn =100,       
    headerEL = document.getElementById('header');
    if (distanceY > shrinkOn) {
        headerEL.classList.add("smaller");
    } else {
        headerEL.classList.remove("smaller");
    }
}

window.addEventListener('scroll', resizeHeaderOnScroll);