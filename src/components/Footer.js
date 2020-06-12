import React from 'react';
import styled from 'styled-components';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { SocialIcon } from 'react-social-icons';

const Styles = styled.div`

    .title{
        font-weight: bold;
    }
    .footerLists {
        margin-bottom: 30px;
    }
    
    .socials{
        padding: 1rem;
        margin: 10px;
        weight: 20px;
        height: 20px;
    }
    .social-icon{
        weight: 20px;
        height: 20px;
    }

`;

export const FooterPage = () => (
    <Styles>
        <MDBFooter color = "orange" className="font-small pt-4 mt-4">
            <MDBContainer fluid className = "text-center text-md-left">
                <MDBRow>
                    <MDBCol md="4">
                        <h5 className="title">Footer Content</h5>
                        <p>
                            Here you can use rows and columns here to organize your footer Content.
                        </p>
                    </MDBCol>
                    <MDBCol className = "footerLists" md="2">
                        <h5 className="title">Links</h5>
                            <li className = "list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className = "list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className = "list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                    </MDBCol>
                    <MDBCol className = "footerLists" md="2">
                        <h5 className="title">Links</h5>
                            <li className = "list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className = "list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className = "list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                    </MDBCol>
                    <MDBCol className = "footerLists" md="2">
                        <h5 className="title">Links</h5>
                            <li className = "list-unstyled">
                                <a href="#!">Link 1</a>
                            </li>
                            <li className = "list-unstyled">
                                <a href="#!">Link 2</a>
                            </li>
                            <li className = "list-unstyled">
                                <a href="#!">Link 3</a>
                            </li>
                    </MDBCol>
                    <MDBCol className = "footerLists" md="2">
                        <h5 className="title">Contact Us</h5>
                        <SocialIcon className="socials" url="https://facebook.com"/>
                        <SocialIcon className="socials" url="https://youtube.com"/>
                        <SocialIcon className="socials" url="https://instagram.com"/>
                        <SocialIcon className="socials" url="mailto:ranushadesilva98@gmail.com"/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className= "footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com">OurKidsLanka.com</a>
                </MDBContainer>
            </div>
        </MDBFooter>
    </Styles>
)