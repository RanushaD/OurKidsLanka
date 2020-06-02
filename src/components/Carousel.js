import React from 'react';
import {Carousel} from 'react-bootstrap';
import styled from 'styled-components';
import pageHead from '../assets/pageHeader.jpg';


const Styles = styled.div`
    .slidepics{
        background-size: cover;
        padding-top: 70px;
        position: relative;
        max-width:100%;
        z-index: 2;
    }
    .carousel .carousel-caption{
        position: absolute;
        padding: 1rem
        padding-bottom: 25%;
        color: white;
    }


`;

export const Slideshow = () => (
    <Styles>
        <Carousel prevIcon nextIcon aria-hidden="false">
            <Carousel.Item>
                <img className='slidepics' src={pageHead} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>blahgjh hjghg hj ghjgjg hg jg hjgjg jg jghjg jhgj.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='slidepics' src={pageHead} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>blahgjh hjghg hj ghjgjg hg jg hjgjg jg jghjg jhgj.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='slidepics' src={pageHead} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>blahgjh hjghg hj ghjgjg hg jg hjgjg jg jghjg jhgj.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Styles>
)