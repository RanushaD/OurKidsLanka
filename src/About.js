import React from 'react';
import { Layout } from './components/Layout';
import {Figure} from 'react-bootstrap';
import styled from 'styled-components';
import pageHead2 from '../src/assets/pageHeader2.jpg';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol} from 'mdbreact';

const Styles = styled.div `
    .header{
       position: relative;
       padding-top: 100px;
    }

    .video{
        position: relative;
        height: auto;
        max-width: 100%;
        
    }

    .flex-center{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        font-size: 3vw;
        position: absolute;
    }

    .text-center{
        font-size: 5vw;
    }

    .container{
        width:100%;
        padding-right:15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }

    @media (min-width: 576px)
        .container{
            max-width: 540px;
        }

    @media (min-width: 768px)
        .container{
            max-width: 720px;
        }

    @media (min-width: 992px)
        .container{
            max-width: 960px;
        }

    .row{
        display: flew;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
`;



export const About = () => (
    <Styles>
        <MDBView className="header">
            <video className="video" playsinline="playsinline" autoPlay="autoplay" muted = "muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
            </video>
            <MDBMask className="flex-center">
                <h1 className="text-center">Video Header</h1>
                <p className="white-text">With HTML5 Video and Bootstrap 4</p>
            </MDBMask>
        </MDBView>
        <Layout>
        <h2> About Page </h2>
        <p> Stare at bkdjkfjkajkdgkdfkgsdkgjk</p>
        <p> Stare at bkdjkfjkajkdgkdfkgsdkgjk</p>
        <p> Stare at bkdjkfjkajkdgkdfkgsdkgjk</p>
        </Layout>
        <MDBContainer className="container">
            <MDBRow className="row">
                <MDBCol className="mt-4">
                    <h2> About Page </h2>
                    <p> Stare at bkdjkfjkajkdgkdfkgsdkgjk</p>
                    <p> Stare at bkdjkfjkajkdgkdfkgsdkgjk</p>
                    <p> Stare at bkdjkfjkajkdgkdfkgsdkgjk</p>
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    </Styles>
    
)