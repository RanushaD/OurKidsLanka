import React from 'react';
import {MDBMask, MDBView, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import styled from 'styled-components';
import tempAvatar from './assets/avatar_img.png';
import {Image, Button} from 'react-bootstrap';
import 'mdbreact/dist/css/mdb.css';
import { Layout } from './components/Layout';

const Styles = styled.div`
    .image-fluid{
        width: 100%;
        height: auto;
    }
    .flex-center{
        display: flex;
        flex-wrap: wrap;
        align-items: center;

    }
    .col{
        position: relative;
        width: 100%;
        padding-bottom: 60px;
        padding-right: 40px;
    }
    .view {
        width: 100%;
        margin-left: 90px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .white-text{
        text-align:center;
        white-space: pre-line;
    }
    .morebutton{
        border-radius: 20px;
        background: #ffbb33;
        font-size: 12px;
        &:hover{
            background: #f1f1f1;
            color: black;
        }
    }

    @media screen and (max-width: 800px) {
        .col{
            flex: 100%;
            max-width: 100%
            align-items: center;
            margin-right: 120px;
        }
    }

`;

const sumup = ['Full Name', 'Age:___', 'Grade:___', '"Quote they said"', 'Something they love to do']


export const MeetUs = () => (
    <Styles>
        <Layout>
            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol className="col" md="5">
                        <MDBView hover zoom className="view">
                            <Image className='image-fluid' src={tempAvatar} alt="" fluid/>
                            <MDBMask className="flex-center" overlay="cyan-light">
                                <p className="white-text">
                                    {sumup.join('\n')}
                                    <p>
                                        <Button className = "morebutton" variant="warning">Learn More About NAME</Button>
                                    </p>                                
                                </p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol className="col" md="5">
                        <MDBView hover zoom className="view">
                            <Image className='image-fluid' src={tempAvatar} alt="" fluid/>
                            <MDBMask className="flex-center" overlay="cyan-light">
                                <p className="white-text">
                                    {sumup.join('\n')}
                                    <p>
                                        <Button className = "morebutton" variant="warning">Learn More About NAME</Button>
                                    </p>
                                </p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>                
                    <MDBCol className="col" md="5">
                        <MDBView hover zoom className="view">
                            <Image className='image-fluid' src={tempAvatar} alt="" fluid/>
                            <MDBMask className="flex-center" overlay="cyan-light">
                                <p className="white-text">
                                    {sumup.join('\n')}
                                    <p>
                                        <Button className = "morebutton" variant="warning">Learn More About NAME</Button>
                                    </p>                                
                                </p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol className="col" md="5">
                        <MDBView hover zoom className="view">
                            <Image className='image-fluid' src={tempAvatar} alt="" fluid/>
                            <MDBMask className="flex-center" overlay="cyan-light">
                                <p className="white-text">
                                    {sumup.join('\n')}
                                    <p>
                                        <Button className = "morebutton" variant="warning">Learn More About NAME</Button>
                                    </p>                               
                                </p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol className="col" md="5">
                        <MDBView hover zoom className="view">
                            <Image className='image-fluid' src={tempAvatar} alt="" fluid/>
                            <MDBMask className="flex-center" overlay="cyan-light">
                                <p className="white-text">
                                    {sumup.join('\n')}
                                    <p>
                                        <Button className = "morebutton" variant="warning">Learn More About NAME</Button>
                                    </p>                                
                                </p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol className="col" md="5">
                        <MDBView hover zoom className="view">
                            <Image className='image-fluid' src={tempAvatar} alt="" fluid/>
                            <MDBMask className="flex-center" overlay="cyan-light">
                                <p className="white-text">
                                    {sumup.join('\n')}
                                    <p>
                                        <Button className = "morebutton" variant="warning">Learn More About NAME</Button>
                                    </p>                               
                                </p>
                            </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Layout>
    </Styles>
)