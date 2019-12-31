import React from 'react';
import { Layout } from './components/Layout';
import styled from 'styled-components';
import tempAvatar from './assets/avatar_img.png';
import {Image} from 'react-bootstrap';

const Styles = styled.div`

    .layout{
        position: relative;
        width: 50%;
    }
    .image{
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: .5s ease;
        backface-visibility: hidden;
        &: hover{
            opacity: 0.3;
        }
    }
    .middle{
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
        &: hover{
            opacity: 1;
        }
    }
    .summary {
        background-color: #4CAF50;
        color: white;
        font-size: 16px;
        padding: 16px 32px; 
    }
`;


export const MeetUs = () => (
    <Styles>
        <Layout>
            <div className="row">
                <div className="column">
                    <img className='image' src={tempAvatar} />
                            <div className="summary">
                                Full Name
                                Age: _____
                                Grade: _____
                                "Quote the they said"
                                Something they love to do
                                Learn more about first name
                            </div>
                        </div>
                        <img className='image' src={tempAvatar} />
                            <div className="middle">
                                <div className="summary">
                                    Full Name
                                    Age: _____
                                    Grade: _____
                                    "Quote the they said"
                                    Something they love to do
                                    Learn more about first name
                                </div>
                            </div>
                        <img className='image' src={tempAvatar} />
                            <div className="middle">
                                <div className="summary">
                                    Full Name
                                    Age: _____
                                    Grade: _____
                                    "Quote the they said"
                                    Something they love to do
                                    Learn more about first name
                                </div>
                            </div>

                </div>
            </div>

        </Layout>
    </Styles>
)